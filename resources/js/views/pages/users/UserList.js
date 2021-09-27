import {CBadge, CSelect} from '@coreui/react'
import {useState, useEffect } from 'react'
import MasterList from '../../../containers/MasterList'

const UserList = () => {
    const [roles, setRoles] = useState([]);
    const [customFilter, setCustomFilter] = useState({})

    useEffect(() => {
      let tableData = JSON.parse(localStorage.getItem('datatable.userslist')) || {}
      setCustomFilter({roleName: (tableData.filter && tableData.filter.roleName) ? tableData.filter.roleName : ''})
    }, [])

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
        }
    ];


    const onChangeRoleFilter = (event) => {
        const value = event.target.value;
        setCustomFilter({roleName: value})
    }

    useEffect(() => {
      const fetchRoles = async () => {
        try {
            const res = await fetch('api/admin/roles?limit=1000&sort=name');
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            setRoles(data.data)
        } catch (error) {
            console.log(error);
        }
      }
      fetchRoles()
    }, [])

    const customFilterInput = {
        roleName: (
                  <CSelect value={customFilter.roleName ?? ''} aria-label="column name: 'roleName' filter input" onChange={onChangeRoleFilter} size="sm">
                      <option value="">All</option>
                      {
                          roles.map((item, index) => (
                              <option key={index} value={item.name}>{item.name}</option>
                          ))
                      }
                  </CSelect>
                )
    }

    return (
        <MasterList
            tableId="userslist"
            fields={fields}
            apiUrl="/api/admin/users"
            showToolbar={false}
            customFilterInput={customFilterInput}
            createButtonVisible={false}
            customFilter={customFilter}
        />
    );

}

export default UserList
