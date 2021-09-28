import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'

const TaxCodeList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Code',
            key: 'code'
        },
        {
            label: 'Percentage (%)',
            key: 'percentage',
            filter: false
        },
        {
            label: 'Linked Account',
            key: 'account_name',
            type: 'custom',
            onRender: (item) => (
                <td>{item.account_number ? item.account_number +' - '+ item.account_name : ''}</td>
            )
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)

    return (
        <MasterList
            tableId="taxcodeslist"
            fields={fields}
            apiUrl="/api/setup/taxcodes"
            createUrl='/tax-codes/create'
            editUrl='/tax-codes'
            customFilter={{company_id: activeCompany.id}}
        />
    );

}

export default TaxCodeList
