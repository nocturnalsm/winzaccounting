import MasterList from '../../../containers/MasterList'
import { CButton } from '@coreui/react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
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
    const dtRef = useRef(null)
    let history = useHistory()

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])
    
    const handleCreate = () => {
        history.push('/banks/create')
    }
    const handleCreateAccount = () => {
        history.push('/banks/create-account')
    }
    
    const topButtonsSlot = (
          <>            
            <CButton className="mr-2" color="primary" onClick={event => handleCreateAccount(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add Account</span>
            </CButton>
          </>
    )

    return (
        <MasterList
            tableId="bankslist"
            fields={fields}
            tableRef={dtRef}
            apiUrl="/api/setup/banks"
            editUrl="/banks"               
            createUrl="/banks/create"         
            topButtonsSlot={topButtonsSlot}
        />
    );

}

export default BankList
