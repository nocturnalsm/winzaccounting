import MasterList from '../../../containers/MasterList'

const CompanyList = () => {
    const fields = [
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Type',
            key: 'company_type'
        },
        {
            label: 'Tax ID',
            key: 'tax_number'
        },
        {
            label: 'URL',
            key: 'url',
            type: 'url'
        },
        {
            label: 'Action',
            type: 'toolbar'
        }
    ];

    return (
        <MasterList 
            tableId="companieslist"                    
            fields={fields}
            apiUrl="/api/admin/companies"
            showToolbar={false}                                
        />    

    );

}

export default CompanyList
