import MasterList from '../../../containers/MasterList'

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
        <MasterList
            tableId="permissionslist"
            fields={fields}
            apiUrl="/api/admin/permissions"
        />
    );
}

export default PermissionList
