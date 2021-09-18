import MasterEdit from '../../../containers/MasterEdit'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSelect, CInput, CCol, CFormGroup, CLabel } from '@coreui/react'
import MyAlert from "../../../alert";
import axios from 'axios'

const TaxCodeEdit = (props) => {

    const [accounts, setAccounts] = useState([])
    const activeCompany = useSelector(state => state.activeCompany)
    
    useEffect(() => {
        axios.get("/api/setup/accounts", {
            params: {
                limit: 10000,
                filter: {company_id: activeCompany.id}
            }
        })
        .then(response => {
            if (response){
                setAccounts(response.data.data)
            }
        })
        .catch(error => {
            MyAlert.error({text: error.response.message})
        })

    }, [])

    return (
        <MasterEdit 
            apiUrl="/api/setup/taxcodes"
            formatData={data => {
                return {...data, company_id: activeCompany.id}
            }}>
            {props => (
                <>            
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Tax Name</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            placeholder="Enter tax name"
                            autoFocus={true}
                            autoComplete="off"
                            type="text"
                            innerRef={props.ref}
                            disabled={props.loading}
                            onChange={e => props.handleChange({name: e.target.value})}
                            value={props.data.name ?? ''}
                            invalid={props.isInvalid('name')}
                            required
                            />
                            {props.feedback('name')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Tax Code</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="text"
                            placeholder="Enter tax code"
                            autoComplete="off"
                            disabled={props.loading}
                            value={props.data.code ?? ''}
                            onChange={e => props.handleChange({code: e.target.value})}
                            invalid={props.isInvalid('code')}
                            />
                            {props.feedback('code', 'Pleas enter a code')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Rate (in %)</CLabel>
                        </CCol>
                        <CCol sm="8" lg="3">
                            <CInput
                            type="number"
                            placeholder="Enter tax percentage"
                            autoComplete="off"
                            disabled={props.loading}
                            value={props.data.percentage ?? ''}
                            onChange={e => props.handleChange({percentage: e.target.value})}
                            invalid={props.isInvalid('percentage')}
                            />
                            {props.feedback('percentage')}
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol sm="4" lg="2">
                            <CLabel>Linked to Account</CLabel>
                        </CCol>
                        <CCol sm="8" lg="5">
                            <CSelect
                              type="text"
                              placeholder="Choose account"
                              autoComplete="off"
                              disabled={props.loading}
                              value={props.data.account_id ?? ''}
                              onChange={e => props.handleChange({account_id: e.target.value})}
                            >
                                <option value=""></option>
                            {
                                accounts ?
                                accounts.map((item, index) => (
                                    <option key={item.id} value={item.id}>{item.number} - {item.name}</option>
                                )) : ''
                            }
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                </>
            )}
        </MasterEdit>
    )
}

export default TaxCodeEdit
