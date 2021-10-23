import React, { useEffect, useState, useImperativeHandle } from 'react';
import axios from 'axios';
import MyAlert from '../../alert';
import DTToolbar from './DTToolbar'
import CreateButton from './CreateButton'
import { useSelector } from 'react-redux';
import { store, setAppLoading } from '../../store';
import {debounce, isEqual} from 'lodash';
import {CDataTable,CPagination, CRow, CCol, CSelect, CBadge} from '@coreui/react';

const DTable = React.forwardRef(({
    customFilter,
    showCheckColumn = true,
    ...props},
    ref) => {

    let tableData = JSON.parse(localStorage.getItem('datatable.' + props._id)) || {}
    let initialParams = {
        page: tableData.page ?? 1,
        limit: tableData.limit ?? 10,
        sort: tableData.sort,
        order: tableData.order ?? 'asc',
        filter: tableData.filter ?? {}
    };
    

    const appLoading = useSelector(state => state.appLoading);
    const [data, setData] = useState([]);
    const [columnHeaders, setColumnHeaders] = useState({});
    const [showToolbar, setShowToolbar] = useState(true);
    const [customFields, setCustomFields] = useState({});
    const [fields, setFields] = useState(props.fields);
    const [params, setParams] = useState(initialParams)    
    const [rowsChecked, setRowsChecked] = useState({})
    const [allChecked, setAllChecked] = useState(false)

    const changeParams = (values) => {
        let newValues = {...params, ...values}
        let { page, limit, sort, order, filter } = newValues
        newValues = {
            page: page ?? 1,
            limit: limit ?? 10,
            sort: sort,
            order: order ?? 'asc',
            filter: filter
        }
        if (!isEqual(params, newValues)){            
            setParams(newValues)
        }
    }

    useEffect(() => {
        
    }, [allChecked])

    useEffect(() => {
        console.log('rows', rowsChecked)
    }, [rowsChecked])

    const handleCheckColumnChange = (event, item) => {                
        console.log(rowsChecked)     
        console.log(item)            
        console.log(event.target.checked)
    }

    const getCheckedState = (item) => {
        console.log('data', data)
        console.log('test', rowsChecked[item.id])
        return rowsChecked[item.id]
    }

    const getCheckColumn = () => {
        return {
            label: '',
            key: '_check',
            type: 'custom',
            sorter: false,
            filter: false,            
            _style: {
                width: '2%'
            }
        }
    }
    useEffect(() => {        
        fetchData()
        localStorage.setItem('datatable.' +props._id, JSON.stringify(params))
    }, [params])

    useEffect(() => {       
        let newFilter = {...params.filter, ...customFilter}
        changeParams({filter: newFilter})
    }, [customFilter])

    useImperativeHandle(ref, () => ({
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
                field.sorter = true
                return field;
            }

        })
        if (showCheckColumn){
            let checkColumn = getCheckColumn()             
            currentFields = [checkColumn, ...currentFields]
            slots[checkColumn.key] = (item, index) => {
                return (
                    <td key={'check-' + item.id}>
                        <input 
                            type="checkbox"
                            onChange={event => handleCheckColumnChange(event, item)}    
                            checked={getCheckedState(item)}         
                        />                        
                    </td>
                )
            },
            setColumnHeaders({
                _check: (
                    <input type="checkbox" 
                        onChange={event => {                                                            
                            if (data.data){
                                let checked = {}
                                data.data.map(item => {
                                    checked[item.id] = event.currentTarget.checked
                                })
                                setRowsChecked(checked)
                            }
                        }}                         
                    />
                )
            })
        }
        setFields(currentFields);
        setCustomFields(slots);

    }, [])

    const fetchData = async () => {
    
        store.dispatch(setAppLoading(true));
        try {            
            const response = await axios.get(props.apiUrl,
                {
                    params: params
                }
            );
            setData(response.data);
        }
        catch (error){
            MyAlert.error({text: error.response.data.message});
        }
        finally {
            store.dispatch(setAppLoading(false));
        }

    }
    const handlePageChange = newPage => {
        if (newPage && params.page != newPage){            
            changeParams({page: newPage});
        }
  	};
    const handleFilterChange = (filter) => {       
        let newFilter = {...params.filter, ...filter}
        if (!isEqual(params.filter, newFilter)){
            changeParams({filter: newFilter})
        }
    }
  	const handlePerRowsChange = newLimit => {
        if (params.limit != newLimit){
            changeParams({limit: newLimit});
        }
  	};

    const handleSort = (newSort) => {             
        let sort = newSort.column;
        let order = newSort.asc == true ? 'asc' : 'desc'
        if (sort != params.sort || order != params.order){
            changeParams({sort: sort, order: order});
        }
  	}

    return (
        <>
          <CRow className="pb-2">
              <CCol xs="6" md="9" lg="10">
                  {
                    props.topButtonsSlot ? props.topButtonsSlot : (
                        props.createButtonVisible ? (
                            <CreateButton
                                disabled={props.createButtonDisabled ?? false}
                                color={props.createButtonColor ?? 'primary'}
                                action={props.createAction}
                                icon={props.createButtonIcon}
                                text={props.createButtonText}
                            />
                        ) : ''
                  )}
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
              columnFilter={{external: true, lazy: true}}
              clickableRows={true}
              columnHeaderSlot={columnHeaders}
              footer={false}
              columnFilterValue={params.filter}
              itemsPerPage={params.limit}
              onColumnFilterChange={debounce(handleFilterChange, 300)}
              loading={appLoading}
              sorterValue={{column: params.sort, asc: params.order == 'asc' ?? true}}
              hover
              sorter={{external:true}}
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
