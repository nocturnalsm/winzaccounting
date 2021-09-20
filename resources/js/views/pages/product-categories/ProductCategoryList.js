import MasterList from '../../../containers/MasterList'
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'

const ProductCategoryList = () => {
         
    const activeCompany = useSelector(state => state.activeCompany)    
    const dtRef = useRef(null)

    const fields = [               
        {
            label: 'Name',
            key: 'name',
            type: 'custom',
            onRender: (item, index) => 
            (
                <td>
                    {("--").repeat(item.depth) + "  " + item.name}                    
                </td>
            )
        },    
        {
            label: 'Code',
            key: 'code',            
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];

    useEffect(() => {
        if (Object.keys(activeCompany).length > 0){            
            dtRef.current.setCustomFilter({company_id: activeCompany.id})
        }
    }, [activeCompany])
    
    return (        
        <MasterList
            tableId="productcategorieslist"
            fields={fields}            
            tableRef={dtRef}
            apiUrl="/api/setup/product-categories"
            defaultFilter={{company_id: activeCompany.id}}
            editUrl="/product-categories"
            createUrl="/product-categories/create"       
        />
    );

}

export default ProductCategoryList
