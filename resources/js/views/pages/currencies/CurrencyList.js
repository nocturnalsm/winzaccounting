import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import MyAlert from '../../../alert';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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
    const [customFilter, setCustomFilter] = useState({company_id: activeCompany.id})
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
                axios.delete('/api/setup/currencies/' + data.id)
                .then(() => {
                    MyAlert.success({text: "Data successfully deleted"})
                    dtRef.current.refresh()
                })
                .catch((error) => {
                    MyAlert.error(error.response)
                })
            }
        })
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
                    key="currencieslist"
                    defaultSort="name"
                    fields={fields}
                    ref={dtRef}
                    customFilterValue={customFilter}
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
