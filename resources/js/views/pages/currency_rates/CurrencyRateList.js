import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import { useState, useEffect, useRef } from 'react';
import MyAlert from '../../../alert'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const CurrencyRateList = () => {

    let tableData = JSON.parse(localStorage.getItem('datatable.currencyrateslist')) || {}
    const activeCompany = useSelector(state => state.activeCompany)

    let history = useHistory()
    const dtRef = useRef(null)
    const fields = [
        {
            label: 'Currency',
            key: 'name',
        },
        {
            label: 'Valid From',
            key: 'start'
        },
        {
            label: 'To',
            key: 'end'
        },
        {
            label: 'Buy',
            key: 'buy'
        },
        {
            label: 'Sell',
            key: 'sell'
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
                axios.delete('/api/setup/currency-rates/' + data.id)
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
        history.push('/currency-rates/create')
    }
    const handleEdit = (data, event) => {
        history.push('/currency-rates/' + data.id)
    }

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="currencyrateslist"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/setup/currency-rates"
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

export default CurrencyRateList
