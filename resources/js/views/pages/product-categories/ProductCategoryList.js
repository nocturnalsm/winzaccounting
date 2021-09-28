import MasterList from '../../../containers/MasterList'
import { useSelector } from 'react-redux'

const ProductCategoryList = () => {
         
    const activeCompany = useSelector(state => state.activeCompany)    

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

    return (        
        <MasterList
            tableId="productcategorieslist"
            fields={fields}                        
            apiUrl="/api/setup/product-categories"
            customFilter={{company_id: activeCompany.id}}
            editUrl="/product-categories"
            createUrl="/product-categories/create"       
        />
    );

}

export default ProductCategoryList
