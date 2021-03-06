import MasterEdit from '../../../containers/MasterEdit'
import SearchSelect from '../../../components/SearchSelect'
import { useState } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel } from '@coreui/react'

const TaxCodeEdit = (props) => {
    
    const activeCompany = useSelector(state => state.activeCompany)    
    const [defaultAccount, setDefaultAccount] = useState(null)

    return (
        <MasterEdit title="Tax Code"
            apiUrl="/api/setup/taxcodes"
            formData={{ id: '', name: '', code: '', percentage: '', account_id: '', company_id: activeCompany.id}}                                
            onOpen={data => {
                if (data && data.account_id){
                    setDefaultAccount({
                        id: data.account_id, 
                        number: data.account_number, 
                        name: data.account_name
                    })
                }                
            }}  
            obSubmitSuccess={request => {
                if (request.id == ""){
                    setDefaultAccount(null)
                }
            }}
            >
            {props => (
                <>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Tax Name</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter tax name"
                            autoFocus={true}
                            autoComplete="off"
                            type="text"
                            innerRef={props.inputRefs('name')}
                            disabled={props.loading}
                            onChange={e => props.handleChange({name: e.target.value})}
                            value={props.data.name}
                            invalid={props.isInvalid('name')}
                            required
                            />
                            {props.feedback('name')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Tax Code</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="text"
                            placeholder="Enter tax code"
                            autoComplete="off"
                            disabled={props.loading}
                            value={props.data.code}
                            innerRef={props.inputRefs('code')}
                            onChange={e => props.handleChange({code: e.target.value})}
                            invalid={props.isInvalid('code')}
                            />
                            {props.feedback('code', 'Pleas enter a code')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Rate (in %)</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="number"
                            placeholder="Enter tax percentage"
                            autoComplete="off"
                            disabled={props.loading}
                            innerRef={props.inputRefs('percentage')}
                            value={props.data.percentage}
                            onChange={e => props.handleChange({percentage: e.target.value})}
                            invalid={props.isInvalid('percentage')}
                            />
                            {props.feedback('percentage')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Linked to Account</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <SearchSelect                                            
                              optionValue={e => e.id}                                                                                          
                              autoComplete="off"
                              disabled={props.loading}             
                              placeholder="Choose account"
                              value={defaultAccount}
                              url="/api/setup/taxcodes/search-account"
                              urlParams={{company_id: activeCompany.id}}
                              ref={props.inputRefs('account_id')}
                              optionLabel={e => e.number + " " + e.name}                 
                              onChange={value => props.handleChange({account_id: value ? value.id : ""})}
                            />                                
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default TaxCodeEdit
