import React, { useEffect, useState, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { store, setAppLoading } from '../../store';
import MyAlert from '../../alert';
import {CDataTable,CPagination, CRow, CCol, CButton, CSelect, CBadge} from '@coreui/react';
import DTToolbar from './DTToolbar'
import CIcon from '@coreui/icons-react';
import {debounce, initial, isEqual} from 'lodash';

const DTable = React.forwardRef((props, ref) => {

    const appLoading = useSelector(state => state.appLoading);
    const [data, setData] = useState([]);
    const [showToolbar, setShowToolbar] = useState(true);
    const [customFields, setCustomFields] = useState({});
    const [fields, setFields] = useState(props.fields);    
    const [params, setParams] = useState({})

    const initialParams = () => {
        return JSON.parse(localStorage.getItem('datatable.' + props._id)) || {
            page: 1,
            limit: 10,
            sort: null,
            order: 'asc',
            filter: props.customFilterValue ?? {}
        };
    }

    useEffect(() => {
        let data = initialParams()
        fetchData(data)
    }, [])

    useImperativeHandle(ref, () => ({

        setCustomFilter(values) {            
            let currParams = initialParams().filter;
            let newFilter = {...currParams.filter, ...values}
            if (Object.keys(newFilter).length > 0 && !isEqual(newFilter, currParams)){
                fetchData({filter: newFilter})                
            }
        },
        refresh() {
            fetchData()
        }

    }));

    useEffect(() => {
        let slots = {};
        let currentFields = props.fields;
        currentFields.map((field, index) => {
            if (field.type == 'toolbar' && showToolbar == true){
                field['key'] = '_toolbar';
                field['sorter'] = false;
                field['filter'] = false;
                slots[field.key] = (item, index)=> (
                    <DTToolbar
                        item={item}
                        createAction={props.createAction}
                        editAction={props.editAction}
                        deleteAction={props.deleteAction}
                        showAction={props.showAction}
                        showButtonVisible={props.showButtonVisible}
                        showButtonDisabled={props.showButtonDisabled}
                        editButtonVisible={props.editButtonVisible}
                        editButtonDisabled={props.editButtonDisabled}
                        deleteButtonVisible={props.deleteButtonVisible}
                        deleteButtonDisabled={props.deleteButtonDisabled}
                    />
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
        setFields(currentFields);
        setCustomFields(slots);

    }, [])

    const fetchData = async (request) => {        
        let { page, limit, sort, order, filter } = { ...params, ...request}        
        
        if (!appLoading){
            store.dispatch(setAppLoading(true));
            try {
                let newParams = {
                    page: page ?? 1,
                    limit: limit ?? 10,
                    sort: sort,
                    order: order ?? 'asc',
                    filter: filter
                }

                const response = await axios.get(props.apiUrl,
                    {
                        params: newParams
                    }
                );
                setData(response.data);
                setParams(newParams)
                localStorage.setItem('datatable.' +props._id, JSON.stringify(newParams))
            }
            catch (error){
                MyAlert.error({text: error.response.data.message});
            }
            finally {
                store.dispatch(setAppLoading(false));
            }
        }
    }
    const handlePageChange = newPage => {
        if (newPage > 0 && newPage != params.page){
            fetchData({page: newPage});
        }
  	};
    const handleFilterChange = (newFilter) => {
        let oldParams = params.filter ?? {}
        if (Object.keys(newFilter).length != 0 && !isEqual(newFilter, oldParams)){
            fetchData({filter: newFilter})
        }
    }
  	const handlePerRowsChange = newLimit => {
        fetchData({limit: newLimit});
  	};
    const handleSort = (newSort) => {
        if (newSort.column != params.sort || newSort.asc != (params.order == 'asc' ?? true)){
            let sort = newSort.column;
            let order = newSort.asc == true ? 'asc' : 'desc'
            fetchData({sort: sort, order: order});
        }
  	};

    return (
        <>
          <CRow className="pb-2">
              <CCol xs="6" md="9" lg="10">
                  <CButton color="primary" onClick={event => props.createAction(event)}>
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
              columnFilterValue={params.filter}
              itemsPerPage={params.limit}
              onColumnFilterChange={debounce(handleFilterChange, 300)}
              loading={appLoading}
              sorterValue={{column: params.sort, asc: params.order == 'asc' ?? true}}
              hover
              sorter
              onSorterValueChange={handleSort}
              scopedSlots = {customFields}
              columnFilterSlot = {props.customFilterInput}
          />
          <CPagination
              activePage={params.page ? (data.count <= params.limit ? 1: params.page) : 1}
              pages={data.count ? Math.ceil(data.count / (params.limit ?? 10)) : 0}
              onActivePageChange={handlePageChange}
          ></CPagination>
        </>
    );

})

export default DTable
