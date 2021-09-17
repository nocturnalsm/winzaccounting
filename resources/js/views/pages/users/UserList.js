import {CBadge, CSelect} from '@coreui/react'
import {useState, useEffect, useRef} from 'react'
import MasterList from '../../../containers/MasterList'

const UserList = () => {
    const [roles, setRoles] = useState([]);

    const ref = useRef(null)
    const tableRef = useRef(null)    

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
        tableRef.current.setCustomFilter({roleName: value})
    }

    useEffect(() => {
        ref.current.fetchData({
            url: "/api/admin/roles",
            data: {
                params: {
                    limit: 5000,
                    sort: 'name'
                }
            },
            success: (response) => {                      
                if (response.data){
                    setRoles(response.data.data)
                }
            }
        })
    }, [])

    let tableData = JSON.parse(localStorage.getItem('datatable.userslist')) || {}
    const customFilterInput = {
        roleName: (
                  <CSelect value={(tableData.filter && tableData.filter.roleName) ?? ''} aria-label="column name: 'roleName' filter input" onChange={onChangeRoleFilter} size="sm">
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
            ref={ref}
            tableRef={tableRef}
            apiUrl="/api/admin/users"
            showToolbar={false}                    
            customFilterInput={customFilterInput}    
            createButtonVisible={false}        
        />            
    );

}

export default UserList
