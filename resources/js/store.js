import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  auth: JSON.parse(localStorage.getItem("appState")) || {},
  appLoading: false,
  activeCompany: {},
  appSuccess: ''
}

const setActiveCompany = (company) => {
  let payload = {activeCompany: company}
  return {
      type: 'ACTIVE_COMPANY',
      payload
  }
}

const setAppLoading = (loading) => {
  let payload = {appLoading: loading}
  return {
      type: 'APP_LOADING',
      payload
  }
}

const setAuth = (authState) => {
    let payload = {auth: authState}
    if (authState.isLoggedIn == true){
        localStorage.setItem("appState", JSON.stringify(authState));        
    }
    else {
        localStorage.removeItem("appState");
    }
    return {
        type: 'USER_LOGGED_IN',
        payload
    }
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':      
      return { ...state, ...rest }
    default:
      return { ...state, ...rest.payload }
  }
}

const store = createStore(changeState)
export {store, setAppLoading, setAuth, setActiveCompany}
