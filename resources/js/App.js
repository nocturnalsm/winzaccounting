import React, {useState, useEffect, useRef} from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { useSelector } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'
import Swal2 from 'sweetalert2'

import './scss/style.scss'
import { setAppError, store } from './store'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const App = () =>  {  
  
 
  const appLoading = useSelector((state) => state.appLoading)
  const appSuccess = useSelector((state) => state.appSuccess)
  const appError = useSelector((state) => state.appError)
  const [progress, setProgress] = useState(0)
  
  const ref = useRef(null)

  useEffect(() => {    

    if (appLoading){
        ref.current.continuousStart();
    }
    else {                
        if (progress >= 0){
            ref.current.complete();
        }
    }

  }, [appLoading]);


  useEffect(() => {      
      if (appError != ''){          
          Swal2.fire({
              icon: 'error',
              title: 'Error',
              text: appError
          })
          store.dispatch(setAppError(''));
      }
  }, [appError])

  useEffect(() => {      
    if (appSuccess != ''){          
        Swal2.fire({
            icon: 'success',
            title: 'Success',
            text: appSuccess
        })
        store.dispatch(setAppSuccess(''));
    }
}, [appSuccess])

  return (    
    <BrowserRouter forceRefresh={false}>
      <LoadingBar color='#f11946' ref={ref} />
      <React.Suspense fallback={loading}>
        <Switch>
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute path="/" component={TheLayout} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
