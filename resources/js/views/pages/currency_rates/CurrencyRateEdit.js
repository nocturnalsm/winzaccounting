import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel } from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const CurrencyRateEdit = (props) => {

    const [initialData, setInitialData] = useState({currency_id: ''})
    const activeCompany = useSelector(state => state.activeCompany)
    const [currency, setCurrency] = useState(null)
    const [formData, setFormData] = useState({id: '', company_id: activeCompany.id, currency_id: '', start: '', end: '', buy: '', sell: ''})
    const ref = useRef(null)

    return (
        <MasterEdit title="Currency Rate"
            formData={formData}
            ref={ref}
            apiUrl="/api/setup/currency-rates"            
            onSubmitSuccess={(request, response) => {
                let {currency_id} = request;
                if (request.id == ''){
                    setFormData({...formData, currency_id: currency_id})
                }
            }}
            onOpen={data => {
                if (data && data.id){
                    setCurrency({id: data.currency_id, name: data.currency_name})
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
                            <SearchSelect
                                placeholder="Choose Currency"
                                autoFocus={true}
                                ref={props.inputRefs('currency_id')}
                                urlParams={{company_id: activeCompany.id}}
                                disabled={props.loading}
                                required
                                value={currency}
                                optionLabel={e => e.name}
                                optionValue={e => e.id}
                                url="/api/setup/currencies/search"
                                onChange={value => props.handleChange({currency_id: value ? value.id : ""})}
                                invalid={props.isInvalid('currency_id')}
                            />
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
                              innerRef={props.inputRefs("start")}
                              type="date"
                              disabled={props.loading}
                              onChange={e => props.handleChange({start: e.target.value})}
                              value={props.data.start}
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
                              innerRef={props.inputRefs("end")}
                              type="date"
                              disabled={props.loading}
                              onChange={e => props.handleChange({end: e.target.value})}
                              value={props.data.end}
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
                            value={props.data.buy}
                            invalid={props.isInvalid('buy')}
                            innerRef={props.inputRefs("buy")}
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
                            value={props.data.sell}
                            invalid={props.isInvalid('sell')}
                            innerRef={props.inputRefs("sell")}
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
