import MasterEdit from '../../../containers/MasterEdit'
import { useRef } from "react";
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel } from '@coreui/react'

const BankEdit = (props) => {

    const activeCompany = useSelector(state => state.activeCompany)

    const ref = useRef(null)

    return (
        <MasterEdit 
            apiUrl="/api/setup/banks"            
            formatData={data => {
                return {...data, company_id: activeCompany.id}
            }}
            >
            {props => (
                <>
                <CFormGroup row>
                    <CCol sm="4" lg="2">
                        <CLabel>Bank Name</CLabel>
                    </CCol>
                    <CCol sm="8" lg="3">
                        <CInput
                        placeholder="Enter bank name"
                        autoFocus={true}
                        autoComplete="off"
                        type="text"
                        innerRef={props.ref}
                        disabled={props.loading}
                        onChange={e => props.handleChange({name: e.target.value})}
                        value={props.data.name ?? ''}
                        invalid={props.isInvalid('name')}
                        required
                        />
                        {props.feedback('name', 'Please enter a name')}
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol sm="4" lg="2">
                        <CLabel>Branch Name</CLabel>
                    </CCol>
                    <CCol sm="8" lg="3">
                        <CInput
                        type="text"
                        placeholder="Enter branch name"
                        autoComplete="off"
                        disabled={props.loading}
                        value={props.data.branch ?? ''}
                        onChange={e => props.handleChange({branch: e.target.value})}
                        />
                    </CCol>
                </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default BankEdit
