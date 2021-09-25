import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CInput, CInputGroup, CInputGroupText, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";

const AccountEdit = (props) => {
   
    const [accountTypes, setAccountTypes] = useState([])
    const [initialData, setInitialData] = useState({account_type: '', parent: ''})
    const activeCompany = useSelector(state => state.activeCompany)
    const [urlParams, setUrlParams] = useState({id: null, account_type: null})
    const ref = useRef(null)

    useEffect(() => {
        fetch("/api/setup/accounts/types")
        .then(response => response.json())
        .then(data => setAccountTypes(data))
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
            ref={ref}
            apiUrl="/api/setup/accounts"
            onOpen={response => {
                if (response){                    
                    let data = response.data
                    if (data.id){
                        ref.current.getRef('account_type').setSelected({id: data.account_type, name: data.account_type_name})
                        ref.current.getRef('parent').setSelected({id: data.parent, number: data.parent_number, name: data.parent_name})
                        setUrlParams({
                            id: data.id, 
                            company_id: activeCompany.id, 
                            account_type: data.account_type
                        })                        
                    }
                }
                else {
                    setUrlParams({company_id: activeCompany.id})
                }
            }}
            onSubmitSuccess={(data, response) => {
                let {account_type, parent} = data;
                if (!data.id){
                    setInitialData({
                        account_type: account_type,
                        parent: parent
                    })
                }
                //getParents(account_type, data.id)
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
                    setUrlParams({
                        id: newData.id, 
                        company_id: activeCompany.id, 
                        account_type: newData.account_type
                    }) 
                    ref.current.getRef('parent').setSelected(null)   
                }                
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
                        required
                        autoFocus={true}
                        options={accountTypes}                        
                        optionValue={e => e.id}
                        optionLabel={e => e.name}
                        disabled={props.loading}                                            
                        ref={props.inputRefs('account_type')}
                        placeholder="Choose Account Type"
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
                        urlParams={urlParams}                        
                        required
                        onChange={value => props.handleChange({parent: value ? value.id : ""})}                        
                        invalid={props.isInvalid('parent')}
                        optionLabel={e => e.number + " " +e.name}
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
