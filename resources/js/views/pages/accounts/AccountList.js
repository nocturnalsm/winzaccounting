import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CBadge, CSelect} from '@coreui/react'
import { useState, useEffect, useRef } from 'react';
import MyAlert from '../../../alert'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const AccountList = () => {

    let tableData = JSON.parse(localStorage.getItem('datatable.accountslist')) || {}
    const [accountTypes, setAccountTypes] = useState([])
    const [filterType, setFilterType] = useState(
        (tableData.filter && tableData.filter.type) ?? ''
    )
    const activeCompany = useSelector(state => state.activeCompany)

    let history = useHistory()
    const dtRef = useRef(null)
    let badges = ['primary', 'warning', 'light', 'success', 'danger']

    const fields = [
        {
            label: 'Type',
            key: 'type',
            type: 'custom',
            onRender: (item, index) => 
            (
                <td>
                    <CBadge key={index} color={badges[parseInt(item.account_type) - 1]}>{item.accountType.toUpperCase()}</CBadge>
                </td>
            )
        },
        {
            label: 'Number',
            key: 'number'
        },
        {
            label: 'Name',
            key: 'name'
        },        
        {
            label: 'Current Balance',
            key: 'balance',
            filter: false,    
            type: 'custom',
            onRender: (item, index) => 
            (
                <td className="text-right">{item.balance}</td>
            )        
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            let customFilter = {company_id: activeCompany.id, type: filterType}
            dtRef.current.setCustomFilter(customFilter)
        }
    }, [filterType, activeCompany])

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete('/api/setup/accounts/' + data.id)
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
        history.push('/accounts/create')
    }
    const handleEdit = (data, event) => {
        history.push('/accounts/' + data.id)
    }

    useEffect(() => {
        axios.get("/api/setup/account-types")
        .then(response => {
            if (response){
                setAccountTypes(response.data)
            }
        })
        .catch(error => {
            MyAlert.error({text: error.response.message})
        })
    }, [])

    const customFilterInput = {
        type: (
                  <CSelect value={filterType} aria-label="column name: 'accountType' filter input" onChange={event => setFilterType(event.target.value)} size="sm">
                      <option value="">All</option>
                      {
                          accountTypes.map((item, index) => (
                              <option key={index} value={item.id}>{item.name}</option>
                          ))
                      }
                  </CSelect>
                )
    }

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="accountslist"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/setup/accounts"
                    showToolbar={true}
                    customFilterInput={customFilterInput}
                    editAction={handleEdit}
                    createAction={handleCreate}
                    deleteAction={handleDelete}
                    showButtonVisible={false}
                />
            </CCardBody>
        </CCard>

    );

}

export default AccountList