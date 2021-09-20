import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSelect, CInput, CCol, CFormGroup, CLabel } from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const CurrencyRateEdit = (props) => {

    const [initialData, setInitialData] = useState({currency_id: ''})
    const [currencies, setCurrencies] = useState([])
    const activeCompany = useSelector(state => state.activeCompany)

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

    }, [])

    return (
        <MasterEdit title="Currency Rate"
            apiUrl="/api/setup/currency-rates"
            formatData={data => {
                let { currency_id } = data
                return {...data,
                        currency_id: currency_id ?? initialData.currency_id,
                        company_id: activeCompany.id}
            }}
            onSubmitSuccess={(request, response) => {
                let {currency_id} = request;
                if (!request.id){
                    setInitialData({currency_id: currency_id})
                }
            }}
            >
            {props => (
                <>
                <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Currency</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                            placeholder="Choose Currency"
                            autoFocus={true}
                            innerRef={props.ref}
                            disabled={props.loading}
                            required
                            value={props.data.currency_id ?? initialData.currency_id}
                            onChange={e => props.handleChange({currency_id: e.target.value})}
                            invalid={props.isInvalid('currency_id')}
                            >
                              <option value=""></option>
                            {
                              currencies.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                              ))
                            }
                            </CSelect>
                            {props.feedback('currency_id')}
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
                              disabled={props.loading}
                              onChange={e => props.handleChange({start: e.target.value})}
                              value={props.data.start ?? ''}
                              invalid={props.isInvalid('start')}
                            />
                            {props.feedback('start', 'Choose start date')}
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
                              disabled={props.loading}
                              onChange={e => props.handleChange({end: e.target.value})}
                              value={props.data.end ?? ''}
                              invalid={props.isInvalid('end')}
                            />
                            {props.feedback('end', 'Please choose end date')}
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
                            disabled={props.loading}
                            onChange={e => props.handleChange({buy: e.target.value})}
                            value={props.data.buy ?? ''}
                            invalid={props.isInvalid('buy')}
                            />
                            {props.feedback('buy')}
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
                            disabled={props.loading}
                            onChange={e => props.handleChange({sell: e.target.value})}
                            value={props.data.sell ?? ''}
                            invalid={props.isInvalid('sell')}
                            />
                            {props.feedback('sell')}
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default CurrencyRateEdit
