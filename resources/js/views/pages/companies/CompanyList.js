import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'

const CompanyList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Type',
            key: 'company_type'
        },
        {
            label: 'Tax ID',
            key: 'tax_number'
        },
        {
            label: 'URL',
            key: 'url',
            type: 'url'
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
                    _id="companieslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/admin/companies"
                    editLink="/currencies/edit"
                    createLink="/currencies/create"
                    deleteLink="/currencies/delete"
                    showLink="/currencies/show"
                />
            </CCardBody>
        </CCard>

    );

}

export default CompanyList
