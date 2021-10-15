import MasterEdit from '../../../containers/MasterEdit'
import { useState } from 'react';
import { useSelector } from "react-redux";
import SearchSelect from '../../../components/SearchSelect'
import { CInput, CBadge, CButton, CInputCheckbox, CCol, CFormGroup, CRow,
         CLabel, CTextarea, CTabs, CTabContent, CTabPane} 
         from '@coreui/react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import MediaGallery from '../../../components/MediaGallery'

const navItems = [
    {'title': 'Information',
     'icon': 'cil-notes',
     'target': 'tab-info'
    },
    {'title': 'Variants',
     'icon': 'cil-color-palette',
     'target': 'tab-variants'
    },
    {'title': 'Media',
     'icon': 'cil-image',
     'target': 'tab-media'
    },    
    {'title': 'Prices',
     'icon': 'cil-money',
     'target': 'tab-prices'
    }
]

const ProductEdit = () => {

    const [productCategory, setProductCategory] = useState([])
    const [productUnit, setProductUnit] = useState([])
    const [productTag, setProductTag]  = useState([])
    const [media, setMedia] = useState([])    
    const [account, setAccount] = useState('')
    const [primaryMedia, setPrimaryMedia] = useState('')
    const activeCompany = useSelector(state => state.activeCompany)
    
    const [formData, setFormData] = useState({
        id: '',
        company_id: activeCompany.id,
        name: '',
        code: '',
        categories: [],
        units: [],
        description: '',
        tags: [],
        can_buy: false,
        can_sell: false,
        can_inventory: false,
        account_id: '',
        productVariants: [],
        variantValues: [],
        media: [],        
        primary_media_id: ''
    })

    const getMedia = (items) => {        
        return items.map((item, index) => {
            return {
                id: item.id,
                originalSrc: item.url,
                thumbnailSrc: item.thumbnail,
                size: item.size,
                type: item.type
            }
        })    
    }

    return (
        <MasterEdit title="Product"
            apiUrl="/api/setup/products"
            navigation={navItems}
            onOpen={data => {
                if (data){
                    setProductCategory(data.categories)
                    setProductUnit(data.units)
                    setProductTag(data.tags)                    
                    setMedia(getMedia(data.media))
                    setPrimaryMedia(data.primary_media_id)
                    if (data.account_id){
                        setAccount({id: data.account_id, number: data.account_number, name: data.account_name})
                    }
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
            <CTabs activeTab={props.activeNavigation}>
                <CTabContent>
                    <CTabPane data-tab="tab-info">            
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
                                    value={props.data.description ?? ''}
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
                                    optionValue={e => e.id ?? e.value}
                                    optionLabel={e => e.name ?? e.label}
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
                    </CTabPane>
                    <CTabPane data-tab="tab-variants">
                        <CFormGroup row>
                            <CCol sm="4" lg="2">
                                <CLabel>Select Variants</CLabel>
                            </CCol>
                            <CCol sm="8" lg="5">
                                <SearchSelect
                                    creatable
                                    url={"/api/setup/products/variants?company_id=" + activeCompany.id}
                                    disabled={props.loading}
                                    value={props.data.productVariants}
                                    optionValue={e => e.id ?? e.value}
                                    optionLabel={e => e.name ?? e.label}
                                    isMulti
                                    ref={props.inputRefs('product_variants')}
                                    placeholder="Choose Variants ( you can create a new one)"
                                    onChange={values => props.handleChange({productVariants: values})}
                                />
                            </CCol>
                        </CFormGroup>
                        {
                            props.data.productVariants ?
                                props.data.productVariants.map((item) => (
                                <CFormGroup row key={'variant-' + (item.name ?? item.label)}>
                                    <CCol sm="4" lg="2">
                                        {(item.name ?? item.label)}
                                    </CCol>
                                    <CCol sm="8" lg="10">
                                        <SearchSelect
                                            creatable
                                            url={"/api/setup/products/variants/values"}
                                            urlParams={{company_id: activeCompany.id, variant_id: item.id}}
                                            disabled={props.loading}
                                            value={props.data.variantValues[(item.name ?? item.label)] ?? []}
                                            isMulti
                                            optionValue={e => e.id ?? e.label}
                                            optionLabel={e => e.value ?? e.label}
                                            ref={props.inputRefs('product_variant_values')}
                                            placeholder="Enter Values ( you can create a new one)"
                                            onChange={values => {                                                 
                                                props.handleChange({                                    
                                                    variantValues: {...props.data.variantValues, [(item.name ?? item.label)]: values}
                                                })
                                            }}
                                        />
                                    </CCol>
                                </CFormGroup>
                            ))
                            : ''
                        }           
                    </CTabPane>
                    <CTabPane data-tab="tab-media">                        
                        <CRow>
                            <CCol className="py-2" sm={4}>
                                <Dropzone
                                    inputContent="Drag Files or Click here to Upload Media"
                                    accept="image/*,video/*"                                    
                                    getUploadParams={({file}) => {
                                        const body = new FormData()
                                        body.append('company_id', activeCompany.id)
                                        body.append('file', file)
                                        return {url: '/api/setup/products/media/' + props.data.id, body}
                                    }}                                    
                                    onChangeStatus={({meta, xhr}, status) => {
                                        if (status === 'done'){
                                            let body = JSON.parse(xhr.responseText)
                                            props.data.media.push(body)                                                                                                                                   
                                            setMedia(getMedia(props.data.media))
                                        }
                                    }}
                                    LayoutComponent={({input, previews, dropzoneProps}) => {
                                        return (
                                            <div>                                                                                      
                                              <div {...dropzoneProps}>
                                                {input}
                                                {previews}
                                              </div>
                                            </div>
                                        )
                                    }}
                                />
                            </CCol>                        
                            <CCol sm={8}>                           
                                <MediaGallery 
                                    onDelete={deleted => {                                    
                                        let filtered = props.data.media.filter(item => {
                                            return item.id != deleted.id
                                        })
                                        props.handleChange({
                                            media: filtered
                                        })                                       
                                        setMedia(getMedia(filtered))                                    
                                    }} 
                                    sources={media} 
                                    deleteButton={(currentMedia, onDelete) => (
                                        <CButton type="button" onClick={event => {
                                                event.stopPropagation()
                                                onDelete(currentMedia)
                                            }} 
                                            className="text-danger" size="sm">Delete
                                        </CButton>
                                    )}
                                    cardLayout={({media: currentMedia, preview, deleteButton}) => {
                                        return (
                                            <>        
                                                {preview}                                        
                                                <div className="meta">
                                                    <div className="text-center mt-2">{(currentMedia.size/1024).toFixed(2)} KB</div>
                                                    <div className="text-center">
                                                        {currentMedia.id == primaryMedia ? (
                                                            <CBadge color="primary">PRIMARY</CBadge>
                                                        )
                                                        : (
                                                            <CButton 
                                                                type="button" 
                                                                onClick={event => {                                                                    
                                                                    event.stopPropagation()
                                                                    setPrimaryMedia(currentMedia.id)    
                                                                    props.handleChange({primary_media_id: currentMedia.id})                                                        
                                                                }} 
                                                                className="text-primary" size="sm">Set as Primary
                                                            </CButton>
                                                        )}
                                                        {deleteButton}
                                                    </div>
                                                </div>                                                
                                            </>
                                        )
                                    }}
                                />
                            </CCol>
                        </CRow>
                    </CTabPane>
                </CTabContent>
            </CTabs>
            </>
        )}
        </MasterEdit>
    )
}

export default ProductEdit
