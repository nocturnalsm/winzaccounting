import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CBadge} from '@coreui/react'

const PermissionList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'User Count',
            type: 'custom',
            key: 'users_count',
            filter: false,
            onRender: (item, index) => (
                <td>
                {item.roles.reduce((total, role) => {
                    return total + role.users_count;
                }, 0)
                }
                </td>
              )
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
                    _id="permissionslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/admin/permissions"
                />
            </CCardBody>
        </CCard>

    );

}

export default PermissionList
