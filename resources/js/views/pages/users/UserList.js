import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CBadge} from '@coreui/react'

const UserList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Username',
            key: 'username'
        },
        {
            label: 'Email',
            key: 'email',
            type: 'email'
        },
        {
            label: 'Roles',
            type: 'custom',
            key: 'roleName',
            onRender: (item) => (
                <td>{
                    item.roles.map((badge, index) => {
                        return (
                            <CBadge key={index} color="success">{badge.name}</CBadge>
                        )
                    })
                }
                </td>
            )
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="userslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/admin/users"
                    showToolbar={true}
                />
            </CCardBody>
        </CCard>

    );

}

export default UserList
