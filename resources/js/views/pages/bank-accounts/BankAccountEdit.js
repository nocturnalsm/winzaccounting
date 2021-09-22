import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const BankAccountEdit = (props) => {

    const [initialData, setInitialData] = useState({bank_id: '', account_id: ''})
    const activeCompany = useSelector(state => state.activeCompany)

    const bankSearch = useRef(null)

    return (
        <MasterEdit title="Bank Account"
            apiUrl="/api/setup/bank-accounts"
            formatData={data => {
                let {bank_id, account_id} = data
                return {...data,
                        bank_id: bank_id ?? initialData.bank_id,
                        account_id: account_id ?? initialData.account_id,
                        company_id: activeCompany.id}
            }}
            onOpen={response => {
                if (response){
                    let data = response.data
                    if (data.id){
                        bankSearch.current.setSelected({id: data.bank_id, name: data.bank_name})
                    }
                }
            }}
            onSubmitSuccess={(request, response) => {
                let {account_id, bank_id} = request;
                if (!request.id){
                    setInitialData({
                        account_id: account_id,
                        bank_id: bank_id
                    })
                }
            }}
            >
            {props => (
                <>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Bank</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <SearchSelect
                              placeholder="Choose Bank"
                              url="/api/setup/banks/search"
                              filter={{company_id: activeCompany.id}}
                              optionLabel={e => e.name}
                              optionValue={e => e.id}
                              required
                              ref={bankSearch}
                              autoFocus={true}
                              innerRef={props.ref}
                              disabled={props.loading}                              
                              onChange={value => props.handleChange({bank_id: (value ? value.id : "")})}
                              invalid={props.isInvalid('bank_id')}                              
                            />
                            {props.feedback('bank_id')}
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
                              disabled={props.loading}
                              onChange={e => props.handleChange({number: e.target.value})}
                              value={props.data.number ?? ''}
                              invalid={props.isInvalid('number')}
                              required
                            />
                            {props.feedback('number')}
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
                            disabled={props.loading}
                            onChange={e => props.handleChange({holder: e.target.value})}
                            value={props.data.holder ?? ''}
                            invalid={props.isInvalid('holder')}
                            required
                            />
                            {props.feedback('holder')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Linked to Account</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <SearchSelect                              
                              placeholder="Choose account"
                              autoComplete="off"
                              disabled={props.loading}
                              value={props.data.account_id ?? initialData.account_id}
                              onChange={value => props.handleChange({account_id: (value ? value.id : "")})}
                              filter={{company_id: activeCompany.id}}
                              url="/api/setup/accounts/search"
                              optionLabel={e => e.number + ' ' + e.name}
                              optionValue={e => e.id}
                            />                            
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default BankAccountEdit
