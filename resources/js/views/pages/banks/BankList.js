import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CButton} from '@coreui/react'
import MyAlert from '../../../alert';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react';


const BankList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Branch',
            key: 'branch'
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)
    const dtRef = useRef(null)
    let history = useHistory()

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete('/api/setup/banks/' + data.id)
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
        history.push('/banks/create')
    }
    const handleCreateAccount = () => {
        history.push('/banks/create-account')
    }
    const handleEdit = (data, event) => {
        history.push('/banks/' + data.id)
    }
    const topButtonSlot = (
          <>
            <CButton className="mr-2" color="primary" onClick={event => handleCreate(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add</span>
            </CButton>
            <CButton className="mr-2" color="primary" onClick={event => handleCreateAccount(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add Account</span>
            </CButton>
          </>
    )

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="bankslist"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/setup/banks"
                    editAction={handleEdit}
                    createAction={handleCreate}
                    deleteAction={handleDelete}
                    showButtonVisible={false}
                    topButtonSlot={topButtonSlot}
                />
            </CCardBody>
        </CCard>

    );

}

export default BankList
