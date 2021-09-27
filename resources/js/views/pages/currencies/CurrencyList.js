import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'
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
    const history = useHistory()

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
            apiUrl="/api/setup/currencies"
            editUrl="/currencies"
            createUrl="/currencies/create"
            topButtonsSlot={topButtonsSlot}
            customFilter={{company_id: activeCompany.id}}
        />
    );

}

export default CurrencyList
