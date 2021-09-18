import MasterList from '../../../containers/MasterList'
import {CBadge, CSelect} from '@coreui/react'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

const AccountList = () => {

    let tableData = JSON.parse(localStorage.getItem('datatable.accountslist')) || {}
    const [accountTypes, setAccountTypes] = useState([])
    const [filterType, setFilterType] = useState(
        (tableData.filter && tableData.filter.type) ?? ''
    )
    const activeCompany = useSelector(state => state.activeCompany)
    
    const ref = useRef(null)
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


    useEffect(() => {
        ref.current.fetchData({
            url: "/api/setup/account-types",
            success: response => {
                if (response){
                    setAccountTypes(response.data)
                }
            }
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
        <MasterList
            tableId="accountslist"
            fields={fields}
            ref={ref}
            tableRef={dtRef}
            apiUrl="/api/setup/accounts"
            showToolbar={true}
            customFilterInput={customFilterInput}
            defaultFilter={{company_id: activeCompany.id}}
            editUrl="/accounts"
            createUrl="/accounts/create"       
            toolbarButtons={{show: {visible: false}}}
        />
    );

}

export default AccountList
