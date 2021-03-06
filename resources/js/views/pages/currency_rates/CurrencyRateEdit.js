import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel } from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const CurrencyRateEdit = (props) => {

    const [initialData, setInitialData] = useState({currency_id: ''})
    const activeCompany = useSelector(state => state.activeCompany)
    const [currency, setCurrency] = useState(null)
    const [formData, setFormData] = useState({id: '', company_id: activeCompany.id, currency_id: '', start: '', rate: ''})
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
                                url="/api/setup/currencies/search?default=0"
                                onChange={value => props.handleChange({currency_id: value ? value.id : ""})}
                                invalid={props.isInvalid('currency_id')}
                            />
                            {props.feedback('currency_id')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Valid as of</CLabel>
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
                            <CLabel>Rate</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter rate"
                            autoComplete="off"
                            type="number"
                            disabled={props.loading}
                            onChange={e => props.handleChange({rate: e.target.value})}
                            value={props.data.rate}
                            invalid={props.isInvalid('rate')}
                            />
                            {props.feedback('rate')}
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default CurrencyRateEdit
