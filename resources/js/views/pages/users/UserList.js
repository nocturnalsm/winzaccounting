import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody, CBadge, CSelect} from '@coreui/react'
import { useState, useEffect, useRef } from 'react';
import MyAlert from '../../../alert'
import axios from 'axios';

const UserList = () => {
    const [roles, setRoles] = useState([]);
    const dtRef = useRef(null)

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


    const onChangeRoleFilter = (event) => {
        const value = event.target.value;
        dtRef.current.setCustomFilter({roleName: value})
    }

    useEffect(() => {
        axios.get("/api/admin/roles", {
            params: {
                limit: 5000,
                sort: 'name'
            }
        }).then(response => {
            if (response.data){
                setRoles(response.data.data)
            }
        })
        .catch(error => {
            MyAlert.error({text: error.response.message})
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
        <CCard>
            <CCardBody>
                <DTable
                    _id="userslist"
                    defaultSort="name"
                    fields={fields}
                    ref={dtRef}
                    apiUrl="/api/admin/users"
                    showToolbar={true}                    
                    customFilterInput={customFilterInput}
                />
            </CCardBody>
        </CCard>

    );

}

export default UserList