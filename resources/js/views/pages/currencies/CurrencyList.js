import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'
import { CBadge } from '@coreui/react'

const CurrencyList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name',
            type: 'custom',
            onRender: (item, index) => (
                <td>
                    {item.name}{item.isDefault ? (
                        <CBadge className="ml-2" color="success">DEFAULT</CBadge>) 
                    : ''
                    }
                </td>
            )
        },
        {
            label: 'Code',
            key: 'code'
        },
        {
            label: 'Sign',
            key: 'sign',
        },
        {
            label: 'Current Rate',
            key: 'current_rate',
            filter: false
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)

    return (
        <MasterList
            tableId="currencieslist"
            fields={fields}
            apiUrl="/api/setup/currencies"
            editUrl="/currencies"
            createUrl="/currencies/create"            
            customFilter={{company_id: activeCompany.id}}            
        />
    );

}

export default CurrencyList
