import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader, CSelect,
         CForm, CInput, CCol, CFormGroup, CLabel,
         CInvalidFeedback, CButton } from '@coreui/react'
import { setAppLoading } from "../../../store";
import MyAlert from "../../../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const CurrencyRateEdit = (props) => {

    const {id} = useParams()
    const [initialData, setInitialData] = useState({})
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({})
    const [currencies, setCurrencies] = useState([])

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
                        currency_id: data.currency_id,
                        start: data.start,
                        end: data.end,
                        buy: data.buy,
                        sell: data.sell
                    }
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: '/api/setup/currency-rates/' + (id ?? ''),
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
                        setData({
                            currency_id: data.currency_id
                        })
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
        axios.get("api/setup/currencies", {
          params: {
              filter: {company_id: activeCompany.id},
              limit: 1000
          }
        })
        .then(response => {
            setCurrencies(response.data.data);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })

        if (id){
            dispatch(setAppLoading(true))
            axios.get('/api/setup/currency-rates/' + id)
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
                <h3>{id && id != "" ? 'Edit Currency Rate' : 'Create Currency Rate'}</h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Currency</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                            placeholder="Choose Currency"
                            autoFocus={true}
                            innerRef={ref}
                            disabled={loading}
                            required
                            value={data.currency_id ?? ''}
                            onChange={e => handleChange({currency_id: e.target.value})}
                            invalid={
                                submitError.hasOwnProperty('currency_id')
                            }
                            >
                              <option value=""></option>
                            {
                              currencies.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                              ))
                            }
                            </CSelect>
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('currency_id') ?
                            submitError.currency_id[0] : 'Unknown Error'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Valid From</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                              placeholder="Choose start date"
                              autoComplete="off"
                              type="date"
                              disabled={loading}
                              onChange={e => handleChange({start: e.target.value})}
                              value={data.start ?? ''}
                              invalid={
                                  submitError.hasOwnProperty('start')
                              }
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('start') ?
                            submitError.start[0] : 'Please choose start date'
                            }
                            </CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>To</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                              placeholder="Choose end date"
                              autoComplete="off"
                              type="date"
                              disabled={loading}
                              onChange={e => handleChange({end: e.target.value})}
                              value={data.end ?? ''}
                              invalid={
                                  submitError.hasOwnProperty('end')
                              }
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('end') ?
                            submitError.end[0] : 'Please choose end date'
                            }
                            </CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Buy</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <CInput
                            placeholder="Enter buy rate"
                            autoComplete="off"
                            type="number"
                            disabled={loading}
                            onChange={e => handleChange({buy: e.target.value})}
                            value={data.buy ?? ''}
                            invalid={
                                submitError.hasOwnProperty('buy')
                            }
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('buy') ?
                            submitError.buy[0] : 'Please enter buy rate'
                            }</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Sell</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <CInput
                            placeholder="Enter sell rate"
                            autoComplete="off"
                            type="number"
                            disabled={loading}
                            onChange={e => handleChange({sell: e.target.value})}
                            value={data.sell ?? ''}
                            invalid={
                                submitError.hasOwnProperty('sell')
                            }
                            />
                            <CInvalidFeedback>{
                            submitError.hasOwnProperty('sell') ?
                            submitError.sell[0] : 'Please enter sell rate'
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

export default CurrencyRateEdit
