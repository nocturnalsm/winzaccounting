import MasterEdit from '../../../containers/MasterEdit'
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel } from '@coreui/react'

const CurrencyEdit = (props) => {

    const activeCompany = useSelector(state => state.activeCompany)

    return (
        <MasterEdit title="Currency"
            apiUrl="/api/setup/currencies"
            formData={{id: '', name: '', code: '', sign: '', company_id: activeCompany.id}}
            >
            {props => (
                    <>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Currency Name</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter currency name"
                            autoFocus={true}
                            autoComplete="off"
                            type="text"
                            innerRef={props.inputRefs('name')}
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
                            <CLabel>Currency Code</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="text"
                            placeholder="Enter currency code"
                            autoComplete="off"
                            innerRef={props.inputRefs('code')}
                            disabled={props.loading}
                            value={props.data.code ?? ''}
                            onChange={e => props.handleChange({code: e.target.value})}
                            invalid={props.isInvalid('code')}
                            />
                            {props.feedback('code')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Currency Sign</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="text"
                            placeholder="Enter currency sign"
                            autoComplete="off"
                            disabled={props.loading}
                            innerRef={props.inputRefs('sign')}
                            value={props.data.sign ?? ''}
                            onChange={e => props.handleChange({sign: e.target.value})}
                            invalid={props.isInvalid('sign')}
                            />
                            {props.feedback('sign')}
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default CurrencyEdit
