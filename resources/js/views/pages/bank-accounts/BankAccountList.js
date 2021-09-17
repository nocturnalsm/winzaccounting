import MasterList from '../../../containers/MasterList'
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

const BankAccountList = () => {
    
    const activeCompany = useSelector(state => state.activeCompany)

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

    return (
        <MasterList
            tableId="bankaccountslist"
            fields={fields}
            tableRef={dtRef}
            apiUrl="/api/setup/bank-accounts"
            showToolbar={true}
            editUrl="/bank-accounts"
            createUrl="/bank-accounts/create"
            toolbarButtons={{show: {visible: false}}}
        />

    );

}

export default BankAccountList
