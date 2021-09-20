import MasterEdit from '../../../containers/MasterEdit'
import { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { CSelect, CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const UnitEdit = (props) => {

    const [units, setUnits] = useState([])    
    const activeCompany = useSelector(state => state.activeCompany)

    const getUnits = (id) => {
        axios.get("api/setup/per_units", {
            params: {unit: id, company_id: activeCompany.id}
        })
        .then(response => {
            setUnits(response.data);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })
    }

    const ref = useRef(null)    

    return (
        <MasterEdit title="Unit"
            apiUrl="/api/setup/units"            
            onOpen={response => {
                if (response){
                    getUnits(response.data.id)
                }
                else {
                    getUnits()
                }
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
                        autoFocus="true"
                        type="text"
                        innerRef={props.ref}
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
                        disabled={props.loading}
                        onChange={e =>props.handleChange({qty_per_unit: e.target.value})}
                        value={props.data.qty_per_unit ?? ''}
                        invalid={props.isInvalid('qty_per_unit')}
                    />
                    {props.feedback('qty_per_unit')}
                </CCol>
                <CCol sm="4" lg="2">
                    <CSelect
                        type="text"
                        placeholder="Choose Unit"
                        autoComplete="off"
                        disabled={props.loading}                        
                        value={props.data.qty_unit ?? ''}
                        onChange={e => props.handleChange({qty_unit: e.target.value})}
                        invalid={props.isInvalid('qty_unit')}
                    >
                        <option value=""></option>
                    {
                        units.map((item, index) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                    </CSelect>
                    {props.feedback('qty_unit')}
                </CCol>
            </CFormGroup>
            </>
        )}
        </MasterEdit>
    )
}

export default UnitEdit
