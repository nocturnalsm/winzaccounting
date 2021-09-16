import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CBadge} from '@coreui/react'

const RoleList = () => {

    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Permissions',
            key: 'permissionName',
            type: 'custom',            
            onRender: (item, index) => (
              <td>
                {
                  item.permissions.map((badge, index) => {
                      return (
                          <CBadge className="mr-2" color="primary" key={index}>{badge.name}</CBadge>
                      )
                  })
                }
                {
                  item.permissions_count > 3 ? (
                      <CBadge className="mr-2" color="warning">
                          {item.permissions_count - 3} more
                      </CBadge>
                  ) : ''
                }
              </td>
            ),
            _style: {
                width: '25%'
            }

        },
        {
            label: 'User Count',
            key: 'users_count',
            filter: false
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
                    _id="roleslist"
                    defaultSort="name"
                    fields={fields}
                    apiUrl="/api/admin/roles"
                />
            </CCardBody>
        </CCard>

    );

}

export default RoleList
