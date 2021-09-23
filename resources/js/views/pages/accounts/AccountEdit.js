import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CSelect, CInput, CInputGroup, CInputGroupText, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const AccountEdit = (props) => {

    const [parents, setParents] = useState([])
    const [accountTypes, setAccountTypes] = useState([])
    const [initialData, setInitialData] = useState({account_type: '', parent: ''})
    const activeCompany = useSelector(state => state.activeCompany)

    const getParents = (type, id) => {
        axios.get("api/setup/account-parents", {
            params: {
                type: type,
                company_id: activeCompany.id,
                id: id
            }
        })
        .then(response => {
            let parentsData = response.data;
            parentsData.unshift({id: 0, name: "--Top Level--"})
            setParents(parentsData);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })
    }

    const ref = useRef(null)

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

    }, [])

    const prefix = (data) => {
        let account_type = data.account_type ?? initialData.account_type
        if (account_type != ''){
            return accountTypes[parseInt(account_type) - 1] ? accountTypes[parseInt(account_type) - 1].prefix : ''
        }
    }

    return (
        <MasterEdit title="Account"
            apiUrl="/api/setup/accounts"
            onOpen={response => {
                getParents(response.data.account_type, response.data.id)
            }}
            onSubmitSuccess={(data, response) => {
                let {account_type, parent} = data;
                if (!data.id){
                    setInitialData({
                        account_type: account_type,
                        parent: parent
                    })
                }
                getParents(account_type, data.id)
            }}
            formatData={data => {
                let {account_type, parent } = data
                return {...data,
                        parent: parent ?? initialData.parent,
                        account_type: account_type ?? initialData.account_type,
                        company_id: activeCompany.id}
            }}
            onChangeData={(oldData, newData) => {
                if (newData.account_type && oldData.account_type != newData.account_type){
                    newData.parent = ''
                    getParents(newData.account_type)
                }
                return newData
            }}
        >
        {props => (
            <>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Account Type</CLabel>
                </CCol>
                <CCol sm="8" lg="3">
                    <SearchSelect
                        placeholder="Choose Account Type"
                        autoFocus={true}
                        ref={props.inputRefs('account_type')}
                        disabled={props.loading}
                        required
                        optionValue={e => e.id}
                        optionLabel={e => e.name}                                                  
                        ref={props.inputRefs('bank_id')}
                        onChange={value => props.handleChange({account_type: value ? value.id : ""})}
                        invalid={props.isInvalid('account_type')}
                    />
                    {props.feedback('account_type')}
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Parent Account</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <SearchSelect                        
                        async
                        placeholder="Choose parent account"
                        autoComplete="off"
                        disabled={props.loading}
                        ref={props.inputRefs('parent')}
                        url="/api/setup/accounts/parents"
                        required                        
                        onChange={value => props.handleChange({parent: value ? value.id : ""})}
                        filter={{id: props.data.id, company_id: activeCompany.id, account_type: props.data.account_type}}
                        invalid={props.isInvalid('parent')}
                        optionLabel={e => e.name}
                        optionValue={e => e.id}
                    />                    
                    {props.feedback('parent')}
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Account Number</CLabel>
                </CCol>
                <CCol sm="8" lg="3">
                    <CInputGroup className="has-validation">
                    <CInputGroupText>
                    {prefix(props.data)}
                    </CInputGroupText>
                    <CInput
                        placeholder="Enter account number"
                        autoComplete="off"
                        type="text"
                        disabled={props.loading}
                        onChange={e =>props.handleChange({number: e.target.value})}
                        value={props.data.number ?? ''}
                        invalid={props.isInvalid('number')}
                        innerRef={props.inputRefs('number')}
                        required
                    />
                    {props.feedback('number')}
                    </CInputGroup>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Account Name</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <CInput
                    placeholder="Enter account name"
                    autoComplete="off"
                    type="text"
                    disabled={props.loading}
                    onChange={e => props.handleChange({name: e.target.value})}
                    value={props.data.name ?? ''}
                    invalid={props.isInvalid('name')}
                    innerRef={props.inputRefs('name')}
                    required
                    />
                    {props.feedback('name', "Please enter a name")}
                </CCol>
            </CFormGroup>
            </>
        )}
        </MasterEdit>
    )
}

export default AccountEdit
