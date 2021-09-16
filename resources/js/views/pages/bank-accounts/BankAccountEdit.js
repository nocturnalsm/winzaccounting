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

const BankAccountEdit = (props) => {

    const {id} = useParams()
    const [initialData, setInitialData] = useState({})
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({})
    const [banks, setBanks] = useState([])
    const [accounts, setAccounts] = useState([])

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
                        bank_id: data.bank_id,
                        number: data.number,
                        holder: data.holder,
                        account_id: data.account_id
                    }
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: '/api/setup/bank-accounts/' + (id ?? ''),
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
        axios.get("/api/setup/accounts", {
            params: {
                limit: 10000,
                filter: {company_id: activeCompany.id, account_type: 1}
            }
        })
        .then(response => {
            if (response){
                setAccounts(response.data.data)
            }
        })
        .catch(error => {
            MyAlert.error({text: error.response.message})
        })

        axios.get("api/setup/banks", {
          params: {
              limit: 10000,
              filter: {company_id: activeCompany.id}
          }
        })
        .then(response => {
            setBanks(response.data.data);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })
        console.log(id);
        if (id){
            dispatch(setAppLoading(true))
            axios.get('/api/setup/bank-accounts/' + id)
            .then(response => {
                dispatch(setAppLoading(false))
                setData(response.data)
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
                <h3>{id && id != "" ? 'Edit Bank Account' : 'Create Bank Account'}</h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Bank</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                            placeholder="Choose Bank"
                            required
                            autoFocus={true}
                            innerRef={ref}
                            disabled={loading}
                            value={data.bank_id ?? ''}
                            onChange={e => handleChange({bank_id: e.target.value})}
                            invalid={
                                submitError.hasOwnProperty('bank_id')
                            }
                            >
                              <option value=""></option>
                            {
                              banks ?
                              banks.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                              )) : ''
                            }
                            </CSelect>
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('bank_id') ?
                            submitError.bank_id[0] : 'Unknown Error'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Account Number</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
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
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('number') ?
                            submitError.number[0] : 'Please enter account number'
                            }
                          </CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Account Holder</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <CInput
                            placeholder="Enter account holder name"
                            autoComplete="off"
                            type="text"
                            disabled={loading}
                            onChange={e => handleChange({holder: e.target.value})}
                            value={data.holder ?? ''}
                            invalid={
                                submitError.hasOwnProperty('holder')
                            }
                            required
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('holder') ?
                            submitError.holder[0] : 'Please enter account holder name'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Linked to Account</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <CSelect
                              type="text"
                              placeholder="Choose account"
                              autoComplete="off"
                              disabled={loading}
                              value={data.account_id ?? ''}
                              onChange={e => handleChange({account_id: e.target.value})}
                            >
                                <option value=""></option>
                            {
                                accounts ?
                                accounts.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.number} - {item.name}</option>
                                )) : ''
                            }
                            </CSelect>
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

export default BankAccountEdit
