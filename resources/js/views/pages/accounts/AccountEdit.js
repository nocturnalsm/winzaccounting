import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CInput, CInputGroup, CInputGroupText, CCol, CFormGroup, CLabel} from '@coreui/react'

const AccountEdit = (props) => {

    const [accountType, setAccountType] = useState('')
    const [parent, setParent] = useState('')
    const activeCompany = useSelector(state => state.activeCompany)
    const [urlParams, setUrlParams] = useState()
    const [parentKey, setParentKey] = useState(0)
    const [defaultOptions, setDefaultOptions] = useState(false)
    const [formData, setFormData] = useState({id: '', account_type: '', company_id: activeCompany.id, name: '', number: '', parent: ''})

    return (
        <MasterEdit title="Account"
            apiUrl="/api/setup/accounts"
            onOpen={data => {
                if (data){
                    setAccountType({id: data.account_type, name: data.account_type_name, prefix: data.prefix})
                    if (data.parent){
                        setParent({id: data.parent, number: data.parent_number, name: data.parent_name, account_type: data.account_type})
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
                if (data.id == ''){
                    setFormData({...formData, account_type: account_type, parent: parent})
                }
                setParentKey(parentKey+1)
            }}
            formData={formData}
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
                        value={accountType}
                        ref={props.inputRefs('account_type')}
                        placeholder="Choose Account Type"
                        onChange={value => {
                            let oldData = props.data.account_type
                            let changed = {account_type: value ? value.id : ""}
                            if (!value || oldData != value.id){
                                let newParams = {company_id: activeCompany.id}
                                if (props.data.id){
                                    newParams = {...newParams, id: props.data.id}
                                }
                                setAccountType(value)
                                newParams = value ? {...newParams, account_type: value.id} : newParams
                                setParent(null)
                                changed['parent'] = ''
                                setUrlParams(newParams)
                                setParentKey(parentKey+1)
                            }
                            props.handleChange(changed)
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
                        placeholder="---Top Level---"
                        disabled={props.loading}
                        ref={props.inputRefs('parent')}
                        url="/api/setup/accounts/parents"
                        value={parent}
                        urlParams={urlParams}
                        defaultOptions={defaultOptions}
                        onChange={value => {
                            setParent(value)
                            let changed = {parent: value ? value.id : ""}
                            if (props.data.account_type == ''){
                                changed['account_type'] = value.account_type
                                setAccountType({id: value.account_type, name: value.accountType, prefix: value.prefix})
                                let newParams = {company_id: activeCompany.id, account_type: value.account_type}
                                if (props.data.id){
                                    newParams = {...newParams, id: props.data.id}
                                }
                                setUrlParams(newParams)
                                setParentKey(parentKey+1)
                            }
                            props.handleChange(changed)
                        }}
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
                    {accountType ? accountType.prefix : ''}
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
