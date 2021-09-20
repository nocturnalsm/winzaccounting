import MasterList from '../../../containers/MasterList'
import { CInput } from '@coreui/react'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

const CurrencyRateList = () => {

    const activeCompany = useSelector(state => state.activeCompany)

    const dtRef = useRef(null)
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
        if (Object.keys(activeCompany).length > 0){
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])

    const onChangeDate = (type, event) => {
        const value = event.target.value;
        let newFilter = {}
        newFilter[type] = value;
        dtRef.current.setCustomFilter(newFilter)
    }

    let tableData = JSON.parse(localStorage.getItem('datatable.currencyrateslist')) || {}
    const customFilterInput = {
        start: (
                  <CInput type="date" value={(tableData.filter && tableData.filter.start) ?? ''} aria-label="column name: 'start' filter input" onChange={event => onChangeDate('start', event)} size="sm" />
                ),
        end: (
                  <CInput type="date" value={(tableData.filter && tableData.filter.end) ?? ''} aria-label="column name: 'end' filter input" onChange={event => onChangeDate('end', event)} size="sm" />
                )
    }

    return (
        <MasterList
            tableId="currencyrateslist"
            fields={fields}
            tableRef={dtRef}
            apiUrl="/api/setup/currency-rates"
            editUrl='/currency-rates'
            createUrl='/currency-rates/create'
            defaultFilter={{company_id: activeCompany.id}}
            customFilterInput={customFilterInput}
        />
    );

}

export default CurrencyRateList
