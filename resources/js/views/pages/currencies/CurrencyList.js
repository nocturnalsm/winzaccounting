import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import MyAlert from '../../../alert';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import axios from 'axios'

const CurrencyList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Code',
            key: 'code'
        },
        {
            label: 'Sign',
            key: 'sign',
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

    const topButtonSlot = (
          <>
            <CButton className="mr-2" color="primary" onClick={event => handleCreate(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add</span>
            </CButton>
            <CButton className="mr-2" color="primary" onClick={event => handleCreateRate(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add Rate</span>
            </CButton>
          </>
    )

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete('/api/setup/currencies/' + data.id)
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
    const handleCreateRate = () => {
        history.push('/currencies/create-rate')
    }
    const handleCreate = () => {
        history.push('/currencies/create')
    }
    const handleEdit = (data, event) => {
        history.push('/currencies/' + data.id)
    }
    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="currencieslist"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/setup/currencies"
                    editAction={handleEdit}
                    createAction={handleCreate}
                    deleteAction={handleDelete}
                    showButtonVisible={false}
                />
            </CCardBody>
        </CCard>

    );

}

export default CurrencyList
