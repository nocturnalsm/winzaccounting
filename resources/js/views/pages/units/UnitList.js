import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const BankList = () => {
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
            label: 'Qty Per Unit',
            key: 'qty_unit_name',
            type: 'custom',
            onRender: (item, index) => (
                <td>{item.qty_per_unit ?? ''} {item.qty_unit_name ?? ''}</td>
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
            tableId="unitslist"
            fields={fields}
            apiUrl="/api/setup/units"
            editUrl="/units"
            createUrl="/units/create"
            customFilter={{company_id: activeCompany.id}}
        />
    );

}

export default BankList
