import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const BankAccountEdit = (props) => {

    const [initialData, setInitialData] = useState({bank_id: '', account_id: ''})
    const activeCompany = useSelector(state => state.activeCompany)

    const ref = useRef(null)

    return (
        <MasterEdit title="Bank Account"
            ref={ref}
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
                    if (ref.current){                                                    
                        if (data.id){                                               
                            ref.current.getRef('bank_id').setSelected({id: data.bank_id, name: data.bank_name})
                        
                        }                    
                        if (data.account_id){
                            ref.current.getRef('account_id').setSelected({id: data.account_id, number: data.account_number, name: data.account_name})
                        }
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
                              async
                              required
                              autoFocus={true}
                              optionValue={e => e.id}
                              optionLabel={e => e.name}
                              disabled={props.loading}
                              placeholder="Choose Bank"
                              url="/api/setup/banks/search"                              
                              ref={props.inputRefs('bank_id')}
                              filter={{company_id: activeCompany.id}}                              
                              invalid={props.isInvalid('bank_id')}                                                                                          
                              onChange={value => props.handleChange({bank_id: (value ? value.id : "")})}                              
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
                              innerRef={props.inputRefs('number')}
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
                            innerRef={props.inputRefs('name')}
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
                              async
                              placeholder="Choose account"
                              autoComplete="off"
                              disabled={props.loading}
                              value={props.data.account_id ?? initialData.account_id}
                              onChange={value => props.handleChange({account_id: (value ? value.id : "")})}
                              filter={{company_id: activeCompany.id}}
                              url="/api/setup/accounts/search"
                              optionLabel={e => e.number + ' ' + e.name}
                              optionValue={e => e.id}
                              ref={props.inputRefs('account_id')}
                            />                            
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default BankAccountEdit
