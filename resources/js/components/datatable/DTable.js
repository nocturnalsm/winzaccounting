import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { store, setAppLoading, setAppError } from '../../store';
import {CDataTable,CPagination, CRow, CCol, CButton, CSelect, CBadge} from '@coreui/react';
import DTToolbar from './DTToolbar'
import CIcon from '@coreui/icons-react';

const DTable = (props) => {

    const appLoading = useSelector(state => state.appLoading);

    const [data, setData] = useState([]);
    const [showToolbar, setShowToolbar] = useState(true);
    const [customFields, setCustomFields] = useState({});
    const [fields, setFields] = useState(props.fields);        
    
    const initial = JSON.parse(localStorage.getItem('datatable.' + props._id)) || {
        page: 1,
        limit: 10,
        sort: null,
        order: 'asc'
    };        
    
    const [params, setParams] = useState(initial)
        
    useEffect(() => {
        fetchData(params)
        localStorage.setItem('datatable.' +props._id, JSON.stringify(params))
    }, [params])

    useEffect(() => {
        let slots = {};
        let currFields = props.fields;
        currFields.map((field, index) => {
            if (field.type == 'toolbar' && showToolbar == true){
                field['key'] = '_toolbar';
                field['sorter'] = false;
                field['filter'] = false;
                slots[field.key] = (item, index)=> (
                    <DTToolbar />
                )
                return field;
            }
            else if (field.type == 'email'){
                slots[field.key] = (item, index) => (
                    <td>
                        <a href={"mailto:" + item[field.key]}>{item[field.key]}</a>
                    </td>
                )
            }
            else if (field.type == 'url'){
                slots[field.key] = (item, index) => (
                    <td>
                        <a target="_blank" href={"http://" +item[field.key]}>{item[field.key]}</a>
                    </td>
                )
            }
            else if (field.type == 'badge'){
                slots[field.key] = (item) => (
                    <td>
                        <CBadge key={index} color="success">{item[field.key]}</CBadge>
                    </td>
                )
            }
            else if (field.type == 'custom'){
                slots[field.key] = field.onRender;
            }

        })
        setFields(currFields);
        setCustomFields(slots);

    }, [])

    const fetchData = async () => {
        store.dispatch(setAppLoading(true));
        try {
            //const {page, limit, sort, order, filter} = params;              
            const response = await axios.get(props.apiUrl, 
                {
                    params: params
                }
            );            
            setData(response.data);
        }
        catch (error){
            store.dispatch(setAppError(error.response.data.message));
        }
        finally {
            store.dispatch(setAppLoading(false));
        }
    }
    const handlePageChange = newPage => {
        let { page, ...rest } = params;
        page = newPage;        
        setParams({page, ...rest});
  	};
    const handleFilterChange = (newFilter) => {      
        if (Object.keys(newFilter).length != 0){
            let { filter, ...rest} = params;
            filter = newFilter;
            setParams({filter, ...rest});
        }
    }
  	const handlePerRowsChange = newLimit => {        
        let { limit, ...rest } = params;
        limit = newLimit;        
        setParams({limit, ...rest});
  	};
    const handleSort = (newSort) => {          
        if (newSort.column != params.sort || newSort.asc != (params.order == 'asc' ?? true)){
            let { sort, order, ...rest } = params;
            sort = newSort.column;
            order = newSort.asc == true ? 'asc' : 'desc'     
            setParams({sort, order, ...rest});
        }
  	};

    return (
        <>
          <CRow className="pb-2">
              <CCol xs="6" md="9" lg="10">
                  <CButton color="primary">
                      <CIcon name="cil-plus" />
                      <span className="ml-2">Add</span>
                  </CButton>
              </CCol>
              <CCol xs="6" md="3" lg="2">
                <CSelect
                    placeholder="Items per page"
                    custom name="pagechange"
                    id="pagechange"
                    value={params.limit}
                    onChange={(event) => handlePerRowsChange(parseInt(event.target.value))}>
                    <option value="10">10 items per page</option>
                    <option value="20">20 items per page</option>
                    <option value="50">50 items per page</option>
                    <option value="100">100 items per page</option>
                </CSelect>
              </CCol>
          </CRow>
          <CDataTable
              items={data.data}
              fields={fields}
              columnFilter
              footer
              itemsPerPage={params.limit}
              onColumnFilterChange={handleFilterChange}
              loading={appLoading}
              sorterValue={{column: params.sort, asc: params.order == 'asc' ?? true}}
              hover
              sorter              
              columnFilterValue={props.customFilterValue ? {...props.customFilterValue, ...params.filter} : {}}
              onSorterValueChange={handleSort}
              scopedSlots = {customFields}
              columnFilterSlot = {props.customFilterInput}
          />
          <CPagination
              activePage={params.page ?? 1}
              pages={Math.ceil(data.count / (params.limit ?? 10))}
              onActivePageChange={handlePageChange}
          ></CPagination>
        </>
    );

}

export default DTable
