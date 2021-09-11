import DTable from '../../../components/datatable/DTable'
import {CCard, CCardBody} from '@coreui/react'
import { setActiveCompany } from '../../../store';
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react';

const CurrencyList = () => {
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
            label: 'Sign',
            key: 'sign',
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    const activeCompany = useSelector(state => state.activeCompany)
    const dtRef = useRef(null)

    useEffect(() => {
                
        dtRef.current.setCustomFilter({company_id: activeCompany.id})         

    }, [activeCompany])

    return (
        <CCard>
            <CCardBody>
                <DTable
                    _id="currencieslist"
                    defaultSort="name"
                    fields={fields}
                    ref={dtRef}
                    customFilterValue={{company_id: activeCompany.id}}
                    apiUrl="/api/setup/currencies"
                    editLink="/currencies/edit"
                    createLink="/currencies/create"
                    deleteLink="/currencies/delete"
                    showLink="/currencies/show"
                />
            </CCardBody>
        </CCard>

    );

}

export default CurrencyList
