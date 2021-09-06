import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'

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
                    _id="taxcodeslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/setup/taxcodes"
                />
            </CCardBody>
        </CCard>

    );

}

export default TaxCodeList
