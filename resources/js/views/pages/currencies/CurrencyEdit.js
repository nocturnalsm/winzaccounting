import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader,
         CForm, CInput, CCol, CFormGroup, CLabel, 
         CInvalidFeedback, CButton } from '@coreui/react'
import { setAppLoading } from "../../../store";
import MyAlert from "../../../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const CurrencyEdit = (props) => {

    const {id} = useParams()
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)    
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
        setSubmitError({})
        if (form.checkValidity() === true) {                        
            const submit = async () => {                                
                try {                    
                    let request = {
                        company_id: activeCompany.id,
                        name: data.name,
                        code: data.code,
                        sign: data.sign
                    }                    
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: '/api/setup/currencies/' + (id ?? ''),
                        data: request
                    })
                    return response
                }
                catch(err){                              
                    return {
                        error : {
                            message: err.response.data.message,
                            errors: err.response.data.errors
                        }
                    }
                }                         
            }
            dispatch(setAppLoading(true));
            submit()
            .then((response) => {
                if (response.error){                            
                    if (response.error.errors){
                        setSubmitError(response.error.errors);
                        setValidated(false);
                    }
                    else {
                        let message = response.error.message ?? 'Something went wrong';
                        MyAlert.error({text: message});
                    }              
                }
                else {
                    MyAlert.success({text: 'Data saved successfully'})
                }
                dispatch(setAppLoading(false));
            });      
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
                MyAlert.error({type: 'error', text: error.message})
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
                                submitError.hasOwnProperty('name')
                            }
                            required
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('name') ?
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
                                submitError.hasOwnProperty('code')
                            }                            
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('code') ?
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
                                submitError.errors
                                && submitError.errors.hasOwnProperty('sign')
                            }                            
                            />
                            <CInvalidFeedback>{
                            submitError.errors
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