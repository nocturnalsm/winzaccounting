import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAppLoading, setAppError } from '../../../store'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
  CInvalidFeedback
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Auth from '../../../auth'

const Login = (props) => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = React.useState('');  
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [loginError, setLoginError] = useState({});
  
  const loading = useSelector(state => state.appLoading)
  const dispatch = useDispatch()
  const passwordRef = React.useRef()

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    setValidated(true)
    if (form.checkValidity() === true) {
      dispatch(setAppLoading(true));
      setLoginError({});
      setLoginAttempt(loginAttempt+1);
      Auth.login({
          username: username,
          password: passwordRef.current.value
      })
      .then((response) => {
          if (response.error){                            
              if (response.error.errors){
                  setLoginError(response.error);
                  setValidated(false);
              }
              else {
                  let message = response.error.message ?? 'Something went wrong';
                  dispatch(setAppError(message));
              }              
          }
          dispatch(setAppLoading(false));
      });

    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6" lg="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    {
                      loginAttempt > 0 &&
                      loginError.hasOwnProperty('message') ?
                        (<CAlert color="danger">
                          {loginError.message}
                        </CAlert>
                        ) : ''
                    }
                    <CInputGroup className="mb-3 has-validation">
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                      <CInput
                        placeholder="Username"
                        autoFocus={true}
                        autoComplete="off"
                        innerRef={input => input && input.focus()}
                        type="text"                        
                        disabled={loading}                        
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        invalid={
                          loginAttempt > 0
                          && loginError.errors
                          && loginError.errors.hasOwnProperty('username')
                        }
                        required
                      />
                      <CInvalidFeedback>{
                        loginAttempt > 0
                        && loginError.errors
                        && loginError.errors.hasOwnProperty('username') ?
                        loginError.errors.username[0] : 'Please enter a username'
                      }</CInvalidFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="off"       
                        innerRef={passwordRef}                                         
                        disabled={loading}                        
                        required
                      />
                      <CInvalidFeedback>Please enter your password.</CInvalidFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton disabled={loading} color="primary" type="submit" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton disabled={loading} color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
