import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { setAppError } from '../../../store'
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
  const [password, setPassword] = React.useState('');
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [loginError, setLoginError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const ref = useRef();
  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    setValidated(true)
    if (form.checkValidity() === true) {
      setLoading(true);
      setLoginError({});
      setLoginAttempt(loginAttempt+1);
      Auth.login({
          username: username,
          password: password
      })
      .then((response) => {
          if (response.error){
              console.log(ref)
              ref.current.focus()
              if (response.error.errors){
                  setLoginError(response.error);
                  setValidated(false);
              }
              else {
                  let message = response.error.message ?? 'Something went wrong';
                  dispatch(setAppError(message));
              }
              setLoading(false);
          }
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
                    <CInputGroup className="mb-3 has-validation" innerRef={ref}>
                      <CInputGroupText id="inputGroupPrepend03">
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                      <CInput
                        placeholder="Username"
                        autoComplete="username"
                        type="text"
                        name="username"
                        disabled={loading}
                        aria-describedby="inputGroupPrepend03"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        invalid={
                          loginAttempt > 0
                          && loginError.errors
                          && loginError.errors.hasOwnProperty('username')
                        }
                        required
                      />
                      {

                      }
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
                        autoComplete="current-password"
                        value={password}
                        disabled={loading}
                        onChange={e => setPassword(e.target.value)}
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
