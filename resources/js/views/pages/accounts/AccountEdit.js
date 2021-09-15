import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader, CSelect,
         CForm, CInput, CInputGroup, CInputGroupText, CCol, CFormGroup, CLabel,
         CInvalidFeedback, CButton } from '@coreui/react'
import { setAppLoading } from "../../../store";
import MyAlert from "../../../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const AccountEdit = (props) => {

    const {id} = useParams()
    const [initialData, setInitialData] = useState({})
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({})
    const [parents, setParents] = useState([])
    const [accountTypes, setAccountTypes] = useState([])

    const dispatch = useDispatch()
    const loading = useSelector(state => state.appLoading)
    const activeCompany = useSelector(state => state.activeCompany)

    const getParents = (type) => {
        axios.get("api/setup/account-parents?type=" + type)
        .then(response => {
            setParents(response.data);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })
    }

    const handleChange = (values) => {
        if (values.account_type && data.account_type != values.account_type){
            values.parent = '';
            getParents(values.account_type)
        }
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
                        number: data.number,
                        name: data.name,
                        account_type: data.account_type,
                        parent: data.parent
                    }
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: '/api/setup/accounts/' + (id ?? ''),
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
        axios.get("/api/setup/account-types")
        .then(response => {
            if (response){
                setAccountTypes(response.data)
            }
        })
        .catch(error => {
            MyAlert.error({text: error.response.message})
        })

        if (id){
            dispatch(setAppLoading(true))
            axios.get('/api/setup/accounts/' + id)
            .then(response => {
                dispatch(setAppLoading(false))
                setData(response.data)
                getParents(response.data.account_type)
                ref.current.focus()
            })
            .catch(error => {
                dispatch(setAppLoading(false))
                MyAlert.error({text: error.message})
                history.back()
            })
       }

    }, [])

    return (
        <CCard>
            <CCardHeader>
                <h3>{id && id != "" ? 'Edit Account' : 'Create Account'}</h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Account Type</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                            placeholder="Choose Account Type"
                            autoFocus={true}
                            innerRef={ref}
                            disabled={loading}
                            value={data.account_type ?? ''}
                            onChange={e => handleChange({account_type: e.target.value})}
                            invalid={
                                submitError.hasOwnProperty('account_type')
                            }
                            >
                              <option value=""></option>
                            {
                              accountTypes.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                              ))
                            }
                            </CSelect>
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('account_type') ?
                            submitError.account_type[0] : 'Unknown Error'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Account Number</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                          <CInputGroup>
                            <CInputGroupText>
                            {
                              data.account_type ?
                                accountTypes[parseInt(data.account_type) - 1].prefix : ''
                            }
                            </CInputGroupText>
                            <CInput
                              placeholder="Enter account number"
                              autoComplete="off"
                              type="text"
                              disabled={loading}
                              onChange={e => handleChange({number: e.target.value})}
                              value={data.number ?? ''}
                              invalid={
                                  submitError.hasOwnProperty('number')
                              }
                              required
                            />
                          </CInputGroup>
                          <CInvalidFeedback>{
                            submitError.hasOwnProperty('number') ?
                            submitError.number[0] : 'Please enter account number'
                            }
                          </CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Account Name</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter account name"
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
                            <CLabel>Parent Account</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                              type="text"
                              placeholder="Choose parent account"
                              autoComplete="off"
                              disabled={loading}
                              value={data.parent ?? ''}
                              onChange={e => handleChange({parent: e.target.value})}
                              invalid={
                                  submitError.hasOwnProperty('parent')
                              }
                            >
                                <option value=""></option>
                            {
                                parents.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                            </CSelect>
                            <CInvalidFeedback>{
                            submitError
                            && submitError.hasOwnProperty('parent') ?
                            submitError.parent[0] : 'Unknown Error'
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

export default AccountEdit
