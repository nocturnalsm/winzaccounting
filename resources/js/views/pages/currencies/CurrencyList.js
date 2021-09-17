import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { CButton } from '@coreui/react'
import { useHistory } from 'react-router-dom'
import CIcon from '@coreui/icons-react';

const CurrencyList = () => {
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
            label: 'Sign',
            key: 'sign',
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)
    const dtRef = useRef(null)
    const history = useHistory()
    
    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])

    const topButtonsSlot = (
          <>            
            <CButton className="mr-2" color="primary" onClick={event => handleCreateRate(event)}>
                <CIcon name="cil-plus" />
                <span className="ml-2">Add Rate</span>
            </CButton>
          </>
    )

    const handleCreateRate = () => {
        history.push('/currencies/create-rate')
    }   

    return (
        <MasterList            
            tableId="currencieslist"
            fields={fields}
            tableRef={dtRef}
            apiUrl="/api/setup/currencies"
            editUrl="/currencies"
            createUrl="/currencies/create"
            topButtonsSlot={topButtonsSlot}
        />
    );

}

export default CurrencyList
