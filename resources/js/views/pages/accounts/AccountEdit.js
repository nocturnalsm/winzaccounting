import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CInput, CInputGroup, CInputGroupText, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";

const AccountEdit = (props) => {

    const [accountType, setAccountType] = useState('')
    const [parent, setParent] = useState('')
    const [initialData, setInitialData] = useState({account_type: '', parent: ''})
    const activeCompany = useSelector(state => state.activeCompany)
    const [urlParams, setUrlParams] = useState()
    const [prefix, setPrefix] = useState()
    const [parentKey, setParentKey] = useState(0)
    const [defaultOptions, setDefaultOptions] = useState(false)


    return (
        <MasterEdit title="Account"
            apiUrl="/api/setup/accounts"
            onOpen={data => {
                if (data){
                    setAccountType({id: data.account_type, name: data.account_type_name})
                    setPrefix(data.prefix)
                    if (data.parent){
                        setParent({id: data.parent, number: data.parent_number, name: data.parent_name})
                    }
                    setUrlParams({
                        id: data.id,
                        company_id: activeCompany.id,
                        account_type: data.account_type
                    })
                }
                else {
                    setUrlParams({company_id: activeCompany.id})
                }
                setDefaultOptions(true)
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
                    if (newData.id){
                      setUrlParams({
                          id: newData.id,
                          company_id: activeCompany.id,
                          account_type: newData.account_type
                      })
                    }
                    else {
                      setUrlParams({
                          company_id: activeCompany.id,
                          account_type: newData.account_type
                      })
                    }
                    setParent(null)            
                    setParentKey(parentKey+1)                            
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
                        url="/api/setup/accounts/types"
                        optionValue={e => e.id}
                        optionLabel={e => e.name}
                        disabled={props.loading}
                        defaultValue={accountType}
                        ref={props.inputRefs('account_type')}
                        placeholder="Choose Account Type"
                        onChange={value => {
                            props.handleChange({account_type: value ? value.id : ""})
                            if (value){
                                setPrefix(value.prefix)
                            }                            
                        }}
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
                        id="parent"
                        placeholder="Choose parent account"                        
                        disabled={props.loading}
                        ref={props.inputRefs('parent')}
                        url="/api/setup/accounts/parents"
                        defaultValue={parent}
                        urlParams={urlParams}
                        defaultOptions={defaultOptions}
                        onChange={value => props.handleChange({parent: value ? value.id : ""})}
                        invalid={props.isInvalid('parent')}
                        optionLabel={e => e.number + " " +e.name}
                        optionValue={e => e.id}
                        key={"parentSelect_" + parentKey}
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
                    {prefix}
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
