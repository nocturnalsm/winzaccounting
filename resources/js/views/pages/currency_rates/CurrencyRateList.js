import MasterList from '../../../containers/MasterList'
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
    
    return (
        <MasterList
            tableId="currencyrateslist"
            fields={fields}
            tableRef={dtRef}
            apiUrl="/api/setup/currency-rates"
            editUrl='/currency-rates'
            createUrl='/currency-rates/create'
            defaultFilter={{company_id: activeCompany.id}}
        />
    );

}

export default CurrencyRateList
