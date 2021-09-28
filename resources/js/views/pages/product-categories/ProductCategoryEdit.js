import MasterEdit from '../../../containers/MasterEdit'
import { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { CInput, CCol, CFormGroup, CLabel} from '@coreui/react'
import SearchSelect from '../../../components/SearchSelect'

const ProductCategoryEdit = (props) => {

    const [initialData, setInitialData] = useState({account_type: '', parent: ''})
    const activeCompany = useSelector(state => state.activeCompany)
    const [parentCategory, setParentCategory] = useState(null)    
    const [urlParams, setUrlParams] = useState()
    const [defaultOptions, setDefaultOptions] = useState(false)

    return (
        <MasterEdit title="Product Category"
            apiUrl="/api/setup/product-categories"
            onOpen={data => {
                if (data){
                    if (data.parent){
                        setParentCategory({id: data.parent, name: data.parent_name})
                    }
                    setUrlParams({exclude_id: data.id, company_id: activeCompany.id})
                }
                else {                    
                    setUrlParams({company_id: activeCompany.id})
                }
                setDefaultOptions(true)
            }}
            onSubmitSuccess={(data, response) => {
                let {parent} = data;
                if (!data.id){
                    setInitialData({
                        parent: parent
                    })
                }
                //getParents(data.id)
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
                    innerRef={props.inputRefs('name')}
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
                        innerRef={props.inputRefs('code')}
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
                    <SearchSelect
                        placeholder="Choose parent category"
                        defaultOptions={defaultOptions}
                        url="api/setup/product-categories/parents"
                        urlParams={urlParams}
                        optionLabel={e => e.name}
                        optionValue={e => e.id}
                        disabled={props.loading}
                        defaultValue={parentCategory}
                        ref={props.inputRefs('parent')}
                        onChange={value => props.handleChange({parent: value ? value.id : ''})}
                        invalid={props.isInvalid('parent')}
                    />
                    {props.feedback('parent')}
                </CCol>
            </CFormGroup>
            </>
        )}
        </MasterEdit>
    )
}

export default ProductCategoryEdit
