import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'

const RoleList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
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
                    fields={fields}
                    apiUrl="/api/admin/roles"
                />
            </CCardBody>
        </CCard>

    );

}

export default RoleList
