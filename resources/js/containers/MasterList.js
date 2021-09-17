import React, { useImperativeHandle } from 'react'
import DTable from '../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import MyAlert from '../alert'
import axios from 'axios';
import CreateButton from '../components/datatable/CreateButton'
import { useHistory } from 'react-router-dom'


const MasterList = React.forwardRef((props, ref) => {    

    let history = useHistory()    
    
    useImperativeHandle(ref, () => ({

        fetchData(params) {            
            axios({
                method: params.method ?? 'get',
                url: params.url,
                data: params.data ?? {}
            })
            .then(response => {                
                params.success(response)
            })
            .catch(error => {
                MyAlert.error({text: error.response.message})
                params.error(error)
            })
        }

    }));

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete(props.apiUrl + data.id)
                .then(() => {
                    MyAlert.success({text: "Data successfully deleted"})
                    dtRef.current.refresh()
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
    let toolbarButtons = {
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
    toolbarButtons = {...toolbarButtons, ...props.toolbarButtons}

    const topButtonsSlot = () => { 
        const createButtonVisible = props.createButtonVisible ?? true
        return (
            <>
                {createButtonVisible ? 
                    (                
                        <CreateButton className="mr-2"
                            disabled={props.createButtonDisabled ?? false} 
                            color={props.createButtonColor ?? 'primary'}
                            action={handleCreate}
                            icon={props.createButtonIcon}
                            text={props.createButtonText}
                        />
                    ) : ''
                }     
                {props.topButtonsSlot}                
            </>
        )
    }
    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id={props.tableId}
                    fields={props.fields}
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
                    topButtonsSlot={topButtonsSlot()}
                />
            </CCardBody>
        </CCard>

    );

})

export default MasterList
