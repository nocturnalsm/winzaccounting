import MasterList from '../../../containers/MasterList'
import { CInput } from '@coreui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const CurrencyRateList = () => {

    const activeCompany = useSelector(state => state.activeCompany)
    const [customFilter, setCustomFilter] = useState({})
    const fields = [
        {
            label: 'Currency',
            key: 'name',
        },
        {
            label: 'Valid From',
            key: 'start',
            filter: false
        },
        {
            label: 'To',
            key: 'end',
            filter: false
        },
        {
            label: 'Buy',
            key: 'buy',
            filter: false,
        },
        {
            label: 'Sell',
            key: 'sell',
            filter: false
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];

    useEffect(() => {
        let tableData = JSON.parse(localStorage.getItem('datatable.currencyrateslist')) || {}
        console.log(tableData.filter)
        setCustomFilter({
            start: (tableData.filter && tableData.filter.start) ?? '',
            end: (tableData.filter && tableData.filter.end) ?? '',
            company_id: activeCompany.id
        })
    }, [])

    useEffect(() => {        
        setCustomFilter({...customFilter, company_id: activeCompany.id})
    }, [activeCompany])

    const onChangeDate = (type, event) => {
        const value = event.target.value;
        let newFilter = {}
        newFilter[type] = value;
        setCustomFilter({...customFilter, ...newFilter})
    }
    
    const customFilterInput = {
        start: (
                  <CInput type="date" value={customFilter.start} aria-label="column name: 'start' filter input" onChange={event => onChangeDate('start', event)} size="sm" />
                ),
        end: (
                  <CInput type="date" value={customFilter.end} aria-label="column name: 'end' filter input" onChange={event => onChangeDate('end', event)} size="sm" />
                )
    }

    return (
        <MasterList
            tableId="currencyrateslist"
            fields={fields}            
            apiUrl="/api/setup/currency-rates"
            editUrl='/currency-rates'
            createUrl='/currency-rates/create'
            customFilter={customFilter}
            customFilterInput={customFilterInput}
        />
    );

}

export default CurrencyRateList
