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
        (tableData.filter && tableData.filter.accountType) ?? ''
    )
    const activeCompany = useSelector(state => state.activeCompany)     

    let history = useHistory()
    const dtRef = useRef(null)

    const fields = [
        {
            label: 'Name',
            key: 'name'
        },        
        {
            label: 'Type',
            key: 'accountType',
            type: 'custom',
            onRender: (item) => (
                <td>
                    <CBadge key={index} color="success">{item.accountType}</CBadge>                
                </td>                
            )
        },
        {
            label: 'Current Balance',
            key: 'balance',
            filter: false
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];    

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            let customFilter = {company_id: activeCompany.id, accountType: filterType}
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
                    MyAlert.error(error.response)
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
        accountType: (
                  <CSelect value={filterType} aria-label="column name: 'accountType' filter input" onChange={event => setFilterType(event.target.value)} size="sm">
                      <option value="All"></option>
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
                    defaultSort="name"
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
