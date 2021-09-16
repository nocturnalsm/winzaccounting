import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import MyAlert from '../../../alert';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import axios from 'axios'

const TaxCodeList = () => {
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
            label: 'Percentage (%)',
            key: 'percentage',
            filter: false
        },
        {
            label: 'Linked Account',
            key: 'account',
            type: 'custom',
            onRender: (item) => (
                <td>{item.account_number ? item.account_number +' - '+ item.account_name : ''}</td>
            )
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
                axios.delete('/api/setup/taxcodes/' + data.id)
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
        history.push('/tax-codes/create')
    }
    const handleEdit = (data, event) => {
        history.push('/tax-codes/' + data.id)
    }

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="taxcodeslist"
                    ref={dtRef}
                    fields={fields}
                    apiUrl="/api/setup/taxcodes"
                    editAction={handleEdit}
                    createAction={handleCreate}
                    deleteAction={handleDelete}
                    showButtonVisible={false} 
                />
            </CCardBody>
        </CCard>

    );

}

export default TaxCodeList
