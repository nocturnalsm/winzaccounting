import MasterList from '../../../containers/MasterList'
import {CBadge, CSelect} from '@coreui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const AccountList = () => {

    const [accountTypes, setAccountTypes] = useState([])
    const [customFilter, setCustomFilter] = useState({})
    const [filterType, setFilterType] = useState("")
    const activeCompany = useSelector(state => state.activeCompany)
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
            key: 'number',
            type: 'custom',
            onRender: (item, index) =>
            (
                <td>
                    {("--").repeat(item.depth) + "  " + item.number}
                </td>
            )
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

    const filterTypeChange = (event) => {
        setFilterType(event.target.value)
    }

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            setCustomFilter({company_id: activeCompany.id, type: filterType})
        }
    }, [filterType, activeCompany])


    useEffect(() => {
      const fetchTypes = async () => {
          try {
              const res = await fetch('/api/setup/accounts/types');
              if (!res.ok) {
                  throw new Error(res.status);
              }
              const data = await res.json();
              setAccountTypes(data.data)
          } catch (error) {
              console.log(error);
          }
      }
      fetchTypes()
      let tableData = JSON.parse(localStorage.getItem('datatable.accountslist')) || {}
      setCustomFilter({
          type: (tableData.filter && tableData.filter.type) ? tableData.filter.type : '',
          company_id: activeCompany.id
      })

    }, [])

    const customFilterInput = {
        type: (
            <CSelect value={customFilter.type} aria-label="column name: 'accountType' filter input" onChange={filterTypeChange} size="sm">
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
            apiUrl="/api/setup/accounts"
            showToolbar={true}
            customFilterInput={customFilterInput}
            customFilter={customFilter}
            editUrl="/accounts"
            createUrl="/accounts/create"
            toolbarButtons={{show: {visible: false}}}
        />
    );

}

export default AccountList
