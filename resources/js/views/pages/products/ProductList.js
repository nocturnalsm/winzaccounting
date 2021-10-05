import MasterList from '../../../containers/MasterList'
import {CBadge, CSelect} from '@coreui/react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const ProductList = () => {

    const [categories, setCategories] = useState([])
    const activeCompany = useSelector(state => state.activeCompany)

    let tableData = JSON.parse(localStorage.getItem('datatable.productslist')) || {}    

    const [customFilter, setCustomFilter] = useState({
        category: (tableData.filter && tableData.filter.category) ? tableData.filter.category : '',
        company_id: activeCompany.id
    })
    const [filterCategory, setFilterCategory] = useState((tableData.filter && tableData.filter.category) ? tableData.filter.category : '')
    let badges = ['primary', 'success', 'light']

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
            label: 'Categories',
            key: 'categoriesName',
            type: 'custom',     
            sorter: false,       
            onRender: (item, index) => (
              <td>
                {
                  item.categories.map((badge, index) => {
                      return (
                          <CBadge className="mr-2" color="primary" key={index}>{badge.name}</CBadge>
                      )
                  })
                }
                {
                  item.categories > 3 ? (
                      <CBadge className="mr-2" color="warning">
                          {item.categories_count - 3} more
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
            label: 'Type',
            key: 'type',
            type: 'custom',
            sorter: false,
            onRender: (item, index) => 
            (
                <td>
                    {
                        item.can_buy ? (
                            <CBadge key={index} color="primary" className="mr-2">Purchased</CBadge>
                        ) : ''
                    }
                    {
                        item.can_buy ? (
                            <CBadge key={index} color="success" className="mr-2">Sold</CBadge>
                        ) : ''
                    }
                    {
                        item.can_buy ? (
                            <CBadge key={index} color="light" className="mr-2">Inventory</CBadge>
                        ) : ''
                    }
                </td>
            )
        },        
        {
            label: 'Current Stock',
            key: 'stock',
            filter: false,
            className: 'text-right'
        },
        {
            label: 'Current Price',
            key: 'price',
            filter: false,
            className: 'text-right'
        },
        {
            label: 'Action',
            type: 'toolbar',
        }
    ];

    const filterChange = (event) => {                
        setFilterCategory(event.target.value)
    }

    useEffect(() => {        
        if (Object.keys(activeCompany).length > 0){
            setCustomFilter({company_id: activeCompany.id, category: filterCategory})
        }
    }, [filterCategory, activeCompany])


    useEffect(() => {
      const fetchCategories = async () => {
          try {
              const res = await fetch('/api/setup/product-categories/search?company_id=' + activeCompany.id);
              if (!res.ok) {
                  throw new Error(res.status);
              }
              const data = await res.json();
              setCategories(data.data)
          } catch (error) {
              console.log(error);
          }
      }
      fetchCategories()

    }, [])

    const customFilterInput = {
        categoriesName: (
            <CSelect value={filterCategory} aria-label="column name: 'category' filter input" onChange={filterChange} size="sm">
                <option value="">All</option>
                {
                    categories.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))
                }
            </CSelect>
        )
    }

    return (
        <MasterList
            tableId="productslist"
            fields={fields}
            apiUrl="/api/setup/products"
            showToolbar={true}
            customFilterInput={customFilterInput}
            customFilter={customFilter}
            editUrl="/products"
            createUrl="/products/create"
            toolbarButtons={{show: {visible: false}}}
        />
    );

}

export default ProductList
