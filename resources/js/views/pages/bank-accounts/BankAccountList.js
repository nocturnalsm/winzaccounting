import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import { useState, useEffect, useRef } from 'react';
import MyAlert from '../../../alert'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const BankAccountList = () => {

    let tableData = JSON.parse(localStorage.getItem('datatable.bankaccountslist')) || {}
    const activeCompany = useSelector(state => state.activeCompany)

    let history = useHistory()
    const dtRef = useRef(null)
    const fields = [
        {
            label: 'Bank',
            key: 'bank_name',
        },
        {
            label: 'Account Number',
            key: 'number'
        },
        {
            label: 'Account Holder',
            key: 'holder'
        },
        {
            label: 'Linked Account',
            key: 'account_name',
            type: 'custom',
            onRender: (item, index) =>
              (
                  <td>{item.account_number ? item.account_number + ' - ' + item.account_name : ''}</td>
              )
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
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])

    const handleDelete = (data, clickEvent) => {
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete('/api/setup/bank-accounts/' + data.id)
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
        history.push('/bank-accounts/create')
    }
    const handleEdit = (data, event) => {
        history.push('/bank-accounts/' + data.id)
    }

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="bankaccountslist"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/setup/bank-accounts"
                    showToolbar={true}
                    editAction={handleEdit}
                    createAction={handleCreate}
                    deleteAction={handleDelete}
                    showButtonVisible={false}
                />
            </CCardBody>
        </CCard>

    );

}

export default BankAccountList
