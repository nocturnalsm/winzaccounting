import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

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
            key: 'account',
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
    const dtRef = useRef(null)
    
    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])
    
    return (
        <MasterList
            tableId="taxcodeslist"
            tableRef={dtRef}
            fields={fields}
            apiUrl="/api/setup/taxcodes"
            createUrl='/tax-codes/create'
            editUrl='/tax-codes'
        />
    );

}

export default TaxCodeList
