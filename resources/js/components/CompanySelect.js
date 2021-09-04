import { useState, useEffect } from 'react';
import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCompany } from '../store';
import axios from 'axios';

const CompanySelect = (props) => {
    
    const [companies, setCompanies] = useState([])
    const dispatch = useDispatch();
    const company = useSelector((state) => state.activeCompany);

    useEffect(() => {
        if (Object.keys(companies).length == 0){
            axios.get('/api/admin/companies', {
                params: {
                    sort: 'name',
                    limit: 1000
                }
            })
            .then(response => {
                setCompanies(response.data.data);
                dispatch(setActiveCompany(response.data.data[0]));
            });                     
        }
    },[])

    useEffect(() => {
        console.log(company);
    })
    const onChangeCompany = (event) => {        
        const selected = event.target.getAttribute('_id');        
        console.log(selected);
        dispatch(setActiveCompany(companies[selected]));
    }
    return (             
        <div>
            {
                companies ? (
                    <CDropdown className="mt-2">
                        <CDropdownToggle caret color="info">
                        {company ? company.name : ''}
                        </CDropdownToggle>
                        <CDropdownMenu>
                            {                                                  
                                companies.map((item,index) => (
                                    <CDropdownItem key={item.id} _id={index} onClick={onChangeCompany}>
                                        {item.name}
                                    </CDropdownItem>
                                ))
                            }
                        </CDropdownMenu>
                    </CDropdown>
                )
                : ''
            }
        </div>
    )
}

export default CompanySelect;