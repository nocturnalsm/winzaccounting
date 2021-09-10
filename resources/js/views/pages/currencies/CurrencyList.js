import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'

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

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="currencieslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/setup/currencies"
                    editLink="/currencies/edit"
                    createLink="/currencies/create"
                    deleteLink="/currencies/delete"
                    showLink="/currencies/show"
                />
            </CCardBody>
        </CCard>

    );

}

export default CurrencyList
