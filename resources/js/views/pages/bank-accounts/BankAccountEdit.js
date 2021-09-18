import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSelect, CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const BankAccountEdit = (props) => {
    
    const [banks, setBanks] = useState([])
    const [accounts, setAccounts] = useState([])

    const activeCompany = useSelector(state => state.activeCompany)    

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

    }, [])

    return (
        <MasterEdit
            apiUrl="/api/setup/bank-accounts"
            formatData={data => {
                return {...data, company_id: activeCompany.id}
            }}
            >
            {props => (
                <>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Bank</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CSelect
                            placeholder="Choose Bank"
                            required
                            autoFocus={true}
                            innerRef={props.ref}
                            disabled={props.loading}
                            value={props.data.bank_id ?? ''}
                            onChange={e => props.handleChange({bank_id: e.target.value})}
                            invalid={props.isInvalid('bank_id')}
                            >
                              <option value=""></option>
                            {
                              banks ?
                              banks.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                              )) : ''
                            }
                            </CSelect>
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
                            {props.isInvalid('holder')}
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
                              disabled={props.loading}
                              value={props.data.account_id ?? ''}
                              onChange={e => props.handleChange({account_id: e.target.value})}
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
                </>
            )}            
        </MasterEdit>
    )
}

export default BankAccountEdit
