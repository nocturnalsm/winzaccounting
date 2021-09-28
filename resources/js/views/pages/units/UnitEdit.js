import MasterEdit from '../../../containers/MasterEdit'
import { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const UnitEdit = (props) => {

    const [perUnit, setPerUnit] = useState(null)
    const activeCompany = useSelector(state => state.activeCompany)
    const [urlParams, setUrlParams] = useState()

    return (
        <MasterEdit title="Unit"
            apiUrl="/api/setup/units"
            onOpen={data => {
                if (data){
                    if (data.qty_per_unit){
                        setPerUnit({id: data.qty_per_unit, name: data.qty_per_unit_name})
                    }
                    console.log(activeCompany)
                    setUrlParams({exclude_id: data.id, company_id: activeCompany.id})
                }
                else {
                    console.log(activeCompany)
                    setUrlParams({company_id: activeCompany.id})
                }
            }}
            onSubmitSuccess={request => {
                //getUnits(request.id)
            }}
            formatData={data => {
                return {...data, company_id: activeCompany.id}
            }}
        >
        {props => (
            <>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Unit Name</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <CInput
                        placeholder="Enter unit name"
                        autoComplete="off"
                        autoFocus={true}
                        type="text"
                        innerRef={props.inputRefs('name')}
                        disabled={props.loading}
                        onChange={e => props.handleChange({name: e.target.value})}
                        value={props.data.name ?? ''}
                        invalid={props.isInvalid('name')}
                        required
                    />
                    {props.feedback('name', "Please enter a name")}
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Unit Code</CLabel>
                </CCol>
                <CCol sm="8" lg="3">
                    <CInput
                        placeholder="Enter unit code"
                        innerRef={props.inputRefs('code')}
                        autoComplete="off"
                        type="text"
                        disabled={props.loading}
                        onChange={e =>props.handleChange({code: e.target.value})}
                        value={props.data.code ?? ''}
                        invalid={props.isInvalid('code')}
                    />
                    {props.feedback('code')}
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Qty per Unit</CLabel>
                </CCol>
                <CCol sm="4" lg="2">
                    <CInput
                        placeholder="Enter quantity per unit"
                        autoComplete="off"
                        type="number"
                        innerRef={props.inputRefs('qty_per_unit')}
                        disabled={props.loading}
                        onChange={e =>props.handleChange({qty_per_unit: e.target.value})}
                        value={props.data.qty_per_unit ?? ''}
                        invalid={props.isInvalid('qty_per_unit')}
                    />
                    {props.feedback('qty_per_unit')}
                </CCol>
                <CCol sm="4" lg="2">
                    <SearchSelect
                        async
                        placeholder="Choose Unit"
                        autoComplete="off"
                        disabled={props.loading}
                        defaultValue={perUnit}
                        optionLabel={e => e.name}
                        optionValue={e => e.id}
                        urlParams={urlParams}
                        ref={props.inputRefs('per_unit')}
                        url="api/setup/units/per_units"
                        onChange={value => props.handleChange({qty_unit: value ? value.id : ''})}
                        invalid={props.isInvalid('qty_unit')}
                    />
                    {props.feedback('qty_unit')}
                </CCol>
            </CFormGroup>
            </>
        )}
        </MasterEdit>
    )
}

export default UnitEdit
