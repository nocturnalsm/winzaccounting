import MasterEdit from '../../../containers/MasterEdit'
import { useState } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CInput, CInputCheckbox, CCol, CFormGroup, CRow,
         CLabel, CTextarea, CCarousel, CCarouselIndicators,
         CCarouselInner, CCarouselItem, CCarouselCaption, CCarouselControl} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const navItems = [
    {'title': 'Information',
     'icon': 'cil-notes',
     'target': '#nav-info'
    },
    {'title': 'Images',
     'icon': 'cil-image',
     'target': '#nav-images'
    },
    {'title': 'Variants',
     'icon': 'cil-color-palette',
     'target': '#nav-variants'
    },
    {'title': 'Prices',
     'icon': 'cil-money',
     'target': '#nav-prices'
    }
]
    

const ProductEdit = () => {

    const [productCategory, setProductCategory] = useState([])    
    const [productUnit, setProductUnit] = useState([])   
    const [productTag, setProductTag]  = useState([])
    const [account, setAccount] = useState('')
    const activeCompany = useSelector(state => state.activeCompany)
    const [formData, setFormData] = useState({
        id: '',         
        company_id: activeCompany.id, 
        name: '', 
        code: '', 
        category: [],
        unit: [],
        description: '',
        tags: [],
        can_buy: false,
        can_sell: false,
        can_inventory: false,
        account_id: ''
    })
    

    return (
        <MasterEdit title="Product"
            apiUrl="/api/setup/products"
            navigation={navItems}
            onOpen={data => {
                if (data){                    
                    setProductCategory(data.categories)
                    setProductUnit(data.units)
                    setProductTag(data.tags)
                    setAccount({id: data.account_id, name: data.account_name})
                }                
            }}
            onSubmitSuccess={(data, response) => {
                let {account_id} = data;
                if (data.id == ''){
                    setFormData({...formData, account_id: account_id})
                }                
            }}
            formData={formData}
        >
        {props => (
            <>
            <h5 id="nav-info" className="border-bottom pb-3 mb-4">
                <CIcon name="cil-notes" className="mr-2"/>
                Information
            </h5>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Product Name</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <CInput
                        placeholder="Enter product name"
                        autoFocus={true}
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
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Product Code</CLabel>
                </CCol>
                <CCol sm="8" lg="3">
                    <CInput
                        placeholder="Enter product code"                        
                        autoComplete="off"
                        type="text"
                        disabled={props.loading}
                        onChange={e => props.handleChange({code: e.target.value})}
                        value={props.data.code}
                        invalid={props.isInvalid('code')}
                        innerRef={props.inputRefs('code')}                        
                    />
                    {props.feedback('code', "Please enter a code")}
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Description</CLabel>
                </CCol>
                <CCol sm="8" lg="6">
                    <CTextarea
                        placeholder="Enter product description"
                        rows="5"
                        disabled={props.loading}
                        onChange={e => props.handleChange({description: e.target.value})}
                        value={props.data.description}
                        innerRef={props.inputRefs('description')}
                    />
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Product Type</CLabel>
                </CCol>
                <CCol md="8" lg="10">
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox 
                        custom                
                        id="type-purchased"          
                        name="type-purchased" 
                        value="Y"                   
                        onChange={e => props.handleChange({can_buy: e.target.value == "Y"})}     
                    />
                    <CLabel variant="custom-checkbox" htmlFor="type-purchased">Purchased</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox 
                        custom 
                        id="type-sold"
                        name="type-sold" 
                        value="Y" 
                        onChange={e => props.handleChange({can_sell: e.target.value == "Y"})}     
                    />
                    <CLabel variant="custom-checkbox" htmlFor="type-sold">Sold</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox 
                        custom 
                        id="type-inventory" 
                        name="type-inventory" 
                        value="Y" 
                        onChange={e => props.handleChange({can_inventory: e.target.value == "Y"})}     
                    />
                    <CLabel variant="custom-checkbox" htmlFor="type-inventory">Inventory</CLabel>
                </CFormGroup>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Category</CLabel>
                </CCol>
                <CCol sm="8" lg="6">
                    <SearchSelect
                        url={"/api/setup/product-categories/search?detail=1&company_id=" + activeCompany.id}
                        optionValue={e => e.id}
                        optionLabel={e => e.name}
                        disabled={props.loading}
                        value={productCategory}
                        isMulti
                        ref={props.inputRefs('product_category')}
                        placeholder="Choose Category (can be more than one)"
                        onChange={values => props.handleChange({categories: values})} 
                    />                    
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Units</CLabel>
                </CCol>
                <CCol sm="8" lg="6">
                    <SearchSelect
                        url={"/api/setup/units/search?company_id=" + activeCompany.id}
                        optionValue={e => e.id}
                        optionLabel={e => e.name}
                        disabled={props.loading}
                        value={productUnit}
                        isMulti
                        ref={props.inputRefs('product_unit')}
                        placeholder="Choose Unit (can be more than one)"
                        onChange={values => props.handleChange({units: values})}
                    />                    
                </CCol>
            </CFormGroup>   
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Tags</CLabel>
                </CCol>
                <CCol sm="8" lg="6">
                    <SearchSelect                        
                        creatable                    
                        url={"/api/setup/products/search-tags?company_id=" + activeCompany.id}                        
                        disabled={props.loading}
                        value={props.data.tags}
                        isMulti
                        ref={props.inputRefs('product_tags')}
                        placeholder="Enter Tags for this product"
                        onChange={values => props.handleChange({tags: values})}                    
                    />                    
                </CCol>
            </CFormGroup>                    
            <CFormGroup row>
                <CCol sm="4" lg="2">
                    <CLabel>Inventory Account</CLabel>
                </CCol>
                <CCol sm="8" lg="5">
                    <SearchSelect
                        placeholder="Choose account"
                        autoComplete="off"
                        value={account}
                        disabled={props.loading}
                        onChange={value => props.handleChange({account_id: (value ? value.id : "")})}
                        url={"/api/setup/products/search-account?company_id=" + activeCompany.id}
                        optionLabel={e => e.number + ' ' + e.name}
                        optionValue={e => e.id}
                        ref={props.inputRefs('account_id')}
                    />
                </CCol>
            </CFormGroup>
            <h5 id="nav-images" className="border-bottom pb-3 mb-4">
                <CIcon name="cil-image" className="mr-2"/>
                Images
            </h5>
            <CRow>
                <CCol sm={12}>
                <CCarousel>
                    <CCarouselIndicators/>
                    <CCarouselInner>
                    <CCarouselItem>                        
                        <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>                        
                        <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>                        
                        <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                    </CCarouselItem>
                    </CCarouselInner>
                    <CCarouselControl direction="prev"/>
                    <CCarouselControl direction="next"/>
                </CCarousel>
                </CCol>
            </CRow>
            <Dropzone
                accept="image/*,audio/*,video/*"
            />
            </>
        )}
        </MasterEdit>
    )
}

export default ProductEdit
