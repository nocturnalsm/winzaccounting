import MasterEdit from '../../../containers/MasterEdit'
import { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { CSelect, CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const ProductCategoryEdit = (props) => {

    const [parents, setParents] = useState([])
    const [initialData, setInitialData] = useState({account_type: '', parent: ''})
    const activeCompany = useSelector(state => state.activeCompany)

    const getParents = (id) => {
        axios.get("api/setup/product-category-parents", {
            params: {
                company_id: activeCompany.id,
                id: id
            }
        })
        .then(response => {            
            setParents(response.data);
        })
        .catch(error => {
            MyAlert.error(error.response.data)
        })
    }

    const ref = useRef(null)        

    return (
        <MasterEdit title="Product Category"
            apiUrl="/api/setup/product-categories"
            onOpen={response => {
                if (response){
                    getParents(response.data.id)
                }
                else {
                    getParents()
                }
            }}
            onSubmitSuccess={(data, response) => {
                let {parent} = data;
                if (!data.id){
                    setInitialData({
                        parent: parent
                    })
                }
                getParents(data.id)
            }}
            formatData={data => {
                let {parent } = data
                return {...data,
                        parent: parent ?? initialData.parent,
                        company_id: activeCompany.id}
            }}            
        >
        {props => (
            <>                                    
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Category Name</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <CInput
                    placeholder="Enter category name"
                    autoComplete="off"
                    autoFocus={true}
                    innerRef={props.ref}
                    type="text"
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
                    <CLabel>Category Code</CLabel>
                </CCol>
                <CCol sm="8" lg="3">                    
                    <CInput
                        placeholder="Enter category code"
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
                    <CLabel>Parent Category</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <CSelect
                        type="text"
                        placeholder="Choose parent category"
                        autoComplete="off"
                        disabled={props.loading}
                        value={props.data.parent ?? initialData.parent}
                        onChange={e => props.handleChange({parent: e.target.value})}
                        invalid={props.isInvalid('parent')}
                    >
                        <option value="0"></option>
                    {
                        parents.map((item, index) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                    </CSelect>
                    {props.feedback('parent')}
                </CCol>
            </CFormGroup>
            </>
        )}
        </MasterEdit>
    )
}

export default ProductCategoryEdit
