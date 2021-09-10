import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader,
         CForm, CInput, CCol, CFormGroup, CLabel, 
         CInvalidFeedback, CButton } from '@coreui/react'
import { setAppLoading, setAppSuccess, setAppError } from "../../../store";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const CurrencyEdit = (props) => {

    const {id} = useParams()
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitAttempt, setSubmitAttempt] = useState(0);
    const [submitError, setSubmitError] = useState({});
  
    const dispatch = useDispatch()
    const loading = useSelector(state => state.appLoading)
    const activeCompany = useSelector(state => state.activeCompany)

    const handleChange = (values) => {        
        setData({...data, ...values})
    }

    let initialData = data

    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        event.stopPropagation()
        setValidated(true)
        setSubmitAttempt(submitAttempt+1);
        if (form.checkValidity() === true) {                        
            const submit = async () => {                
                dispatch(setAppLoading(true))
                try {                    
                    let request = {
                        company_id: activeCompany.id,
                        name: data.name,
                        code: data.code,
                        sign: data.sign
                    }                    
                    if (id){                        
                        const response = await axios.put('/api/setup/currencies/' + id, request)
                    }
                    else {
                        const response = await axios.post('/api/setup/currencies', request)
                    }
                    dispatch(setAppSuccess("Data saved"))
                }
                catch(error)
                {                
                    if (error.response.data){
                        setSubmitError(error.response.data.errors)
                    }
                    else {
                        dispatch(setAppError(error.response))
                    }                                      
                }
                finally {                    
                    dispatch(setAppLoading(false))
                    setValidated(false); 
                }
            }
            submit()
        }
    }
    
    const resetForm = () => {
        handleChange(initialData)
    }

    useEffect(() => {        
        if (id){
            dispatch(setAppLoading(true))
            axios.get('/api/setup/currencies/' + id)
            .then(response => {
                setData(response.data)
            })
            .then(() => {
                dispatch(setAppLoading(false))
            })
            .catch(error => {                
                dispatch(setAppError(error.message))
            })        
       }
    }, [])

    return (
        <CCard>
            <CCardHeader>
                <h3>{id && id != "" ? 'Edit Currency' : 'Create Currency'}</h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>                
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Currency Name</CLabel>
                        </CCol>            
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Currency Name"
                            autoFocus={true}
                            autoComplete="off"                        
                            type="text"                        
                            disabled={loading}                        
                            onChange={e => handleChange({name: e.target.value})}
                            value={data.name ?? ''}
                            invalid={
                                submitAttempt > 0
                                && submitError.hasOwnProperty('name')
                            }
                            required
                            />
                            <CInvalidFeedback>{
                            submitAttempt > 0
                            && submitError.hasOwnProperty('name') ?
                            submitError.name[0] : 'Please enter a name'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>                      
                    <CFormGroup row>
                        <CCol sm="4" lg="2">                     
                            <CLabel>Currency Code</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">                        
                            <CInput
                            type="text"
                            placeholder="Currency Code"
                            autoComplete="off"                               
                            disabled={loading}                                                    
                            value={data.code ?? ''}
                            onChange={e => handleChange({code: e.target.value})}
                            invalid={
                                submitAttempt > 0
                                && submitError.hasOwnProperty('code')
                            }                            
                            />
                            <CInvalidFeedback>{
                            submitAttempt > 0
                            && submitError.hasOwnProperty('code') ?
                            submitError.code[0] : 'Unknown Error'
                            }</CInvalidFeedback>                
                        </CCol>
                    </CFormGroup>   
                    <CFormGroup row>
                        <CCol sm="4" lg="2">                     
                            <CLabel>Currency Sign</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">                        
                            <CInput
                            type="text"
                            placeholder="Currency Sign"
                            autoComplete="off"                               
                            disabled={loading}                                                   
                            value={data.sign ?? ''}
                            onChange={e => handleChange({sign: e.target.value})}
                            invalid={
                                submitAttempt > 0
                                && submitError.errors
                                && submitError.errors.hasOwnProperty('sign')
                            }                            
                            />
                            <CInvalidFeedback>{
                            submitAttempt > 0
                            && submitError.errors
                            && submitError.errors.hasOwnProperty('sign') ?
                            submitError.errors.sign[0] : 'Unknown Error'
                            }</CInvalidFeedback>                        
                        </CCol>
                    </CFormGroup>                         
                </CForm>
            </CCardBody>
            <CCardFooter>
                <CButton className="mr-2" type="submit" onClick={event => handleSubmit(event)} size="md" color="primary">
                    <CIcon name="cil-scrubber" /> Submit
                </CButton> 
                <CButton className="mr-2" type="reset" onClick={resetForm} size="md" color="danger">
                    <CIcon name="cil-ban" /> Reset
                </CButton>
            </CCardFooter>
        </CCard>
    )
}

export default CurrencyEdit