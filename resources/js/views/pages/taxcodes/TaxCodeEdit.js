import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader,
         CForm, CInput, CCol, CFormGroup, CLabel,
         CInvalidFeedback, CButton } from '@coreui/react'
import { setAppLoading } from "../../../store";
import MyAlert from "../../../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const TaxCodeEdit = (props) => {

    const {id} = useParams()
    const [initialData, setInitialData] = useState({})
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({});

    const dispatch = useDispatch()
    const loading = useSelector(state => state.appLoading)
    const activeCompany = useSelector(state => state.activeCompany)

    const handleChange = (values) => {
        setData({...data, ...values})
    }
    const ref = useRef(null)
    const history = useHistory()

    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        event.stopPropagation()
        setValidated(true)
        if (form.checkValidity() === true) {
            const submit = async () => {
                try {
                    let request = {
                        company_id: activeCompany.id,
                        name: data.name,
                        code: data.code,
                        percentage: data.percentage
                    }
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: '/api/setup/taxcodes/' + (id ?? ''),
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
                dispatch(setAppLoading(false));
                if (response.error){
                    if (response.error.errors){
                        setSubmitError(response.error.errors);
                    }
                    else {
                        let message = response.error.message ?? 'Something went wrong';
                        MyAlert.error({text: message});
                    }
                }
                else {
                    MyAlert.success({text: 'Data saved successfully'})
                    setSubmitError({})
                    if (!id){
                        setData({})
                    }
                }
                ref.current.focus()
                setValidated(false);
            });
        }
    }

    const resetForm = () => {
        handleChange(initialData)
    }

    useEffect(() => {
        if (id){
            dispatch(setAppLoading(true))
            axios.get('/api/setup/taxcodes/' + id)
            .then(response => {
                dispatch(setAppLoading(false))
                setData(response.data)
                ref.current.focus()
            })
            .catch(error => {
                dispatch(setAppLoading(false))
                MyAlert.error({type: 'error', text: error.message})
                history.back()
            })
       }
    }, [])

    return (
        <CCard>
            <CCardHeader>
                <h3>{id && id != "" ? 'Edit Tax Code' : 'Create Tax Code'}</h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Tax Name</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter tax name"
                            autoFocus={true}
                            autoComplete="off"
                            type="text"
                            innerRef={ref}
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
                            <CLabel>Tax Code</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="text"
                            placeholder="Enter tax code"
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
                            submitError.code[0] : 'Pleas enter a code'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Percentage (in %)</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="number"
                            placeholder="Enter tax percentage"
                            autoComplete="off"
                            disabled={loading}
                            value={data.percentage ?? ''}
                            onChange={e => handleChange({percentage: e.target.value})}
                            invalid={
                                submitError.hasOwnProperty('percentage')
                            }
                            />
                            <CInvalidFeedback>{
                            submitError
                            && submitError.hasOwnProperty('percentage') ?
                            submitError.percentage[0] : 'Unknown Error'
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

export default TaxCodeEdit