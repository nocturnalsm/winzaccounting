import React, { useState, useEffect } from 'react'
import DTable from '../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import MyAlert from '../alert'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { isEqual } from 'lodash';


const MasterList = React.forwardRef((
    {
      toolbarButtons,
      customFilter,
      ...props
    },
    ref) => {

    let history = useHistory()
    const [tableCustomFilter, setTableCustomFilter] = useState({})
    const [tableKey, setTableKey] = useState(0)

    useEffect(() => {               
        if (!isEqual(tableCustomFilter, customFilter)){                   
            setTableCustomFilter(customFilter)
        }
    }, [customFilter])

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete(props.apiUrl + "/" +data.id)
                .then(() => {
                    MyAlert.success({text: "Data successfully deleted"})
                    setTableKey(tableKey+1)
                })
                .catch((error) => {
                    MyAlert.error({text: error.response})
                })
            }
        })
    }
    const handleCreate = () => {
        history.push(props.createUrl)
    }
    const handleEdit = (data, event) => {
        history.push(props.editUrl + "/" +data.id)
    }
    let toolbarDefaultButtons = {
        create: {
            visible: true,
            disabled: false,
        },
        show: {
            visible: true,
            disabled: false,
        },
        edit: {
            visible: true,
            disabled: false,
        },
        delete: {
            visible: true,
            disabled: false,
        },
    }
    toolbarButtons = {...toolbarDefaultButtons, ...toolbarButtons}

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id={props.tableId}
                    fields={props.fields}
                    key={props.tableId + '_' +tableKey}
                    ref={props.tableRef}
                    apiUrl={props.apiUrl}
                    showToolbar={props.showToolbar ?? true}
                    createButtonDisabled={props.createButtonDisabled ?? false}
                    createButtonVisible={props.createButtonVisible ?? true}
                    customFilterInput={props.customFilterInput}
                    editAction={props.handleEdit ?? handleEdit}
                    createAction={props.handleCreate ?? handleCreate}
                    deleteAction={props.handleDelete ?? handleDelete}
                    showButtonVisible={toolbarButtons.show.visible}
                    editButtonVisible={toolbarButtons.edit.visible}
                    createButtonVisible={toolbarButtons.create.visible}
                    deleteButtonVisible={toolbarButtons.delete.visible}
                    showButtonDisabled={toolbarButtons.show.disabled}
                    editButtonDisabled={toolbarButtons.edit.disabled}
                    createButtonDisabled={toolbarButtons.create.disabled}
                    deleteButtonDisabled={toolbarButtons.delete.disabled}                    
                    customFilter={tableCustomFilter}
                    topSlot={props.topSlot}
                />
            </CCardBody>
        </CCard>

    );

})

export default MasterList
