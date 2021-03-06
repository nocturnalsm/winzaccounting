import MasterList from '../../../containers/MasterList'
import { CButton } from '@coreui/react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CIcon from '@coreui/icons-react';


const BankList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Branch',
            key: 'branch'
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)
    let history = useHistory()
    
    const handleCreateAccount = () => {
        history.push('/banks/create-account')
    }

    const topSlot = ({createButton}) => (
          <>
            {createButton}
            <CButton className="mx-2" color="primary" onClick={event => handleCreateAccount(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add Account</span>
            </CButton>
          </>
    )

    return (
        <MasterList
            tableId="bankslist"
            fields={fields}
            apiUrl="/api/setup/banks"
            editUrl="/banks"
            createUrl="/banks/create"
            topSlot={topSlot}
            customFilter={{company_id: activeCompany.id}}
        />
    );

}

export default BankList
