import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CompanyList = React.lazy(() => import('./views/pages/companies/CompanyList'))
//const CompanyEdit = React.lazy(() => import('./views/pages/companies/CompanyEdit'))
const UserList = React.lazy(() => import('./views/pages/users/UserList'))
const RoleList = React.lazy(() => import('./views/pages/roles/RoleList'))
const PermissionList = React.lazy(() => import('./views/pages/permissions/PermissionList'))
const CurrencyList = React.lazy(() => import('./views/pages/currencies/CurrencyList'))
const CurrencyEdit = React.lazy(() => import('./views/pages/currencies/CurrencyEdit'))
const TaxCodeList = React.lazy(() => import('./views/pages/taxcodes/TaxCodeList'))
const TaxCodeEdit = React.lazy(() => import('./views/pages/taxcodes/TaxCodeEdit'))
const AccountEdit = React.lazy(() => import('./views/pages/accounts/AccountEdit'))
const AccountList = React.lazy(() => import('./views/pages/accounts/AccountList'))
const BankAccountEdit = React.lazy(() => import('./views/pages/bank-accounts/BankAccountEdit'))
const BankAccountList = React.lazy(() => import('./views/pages/bank-accounts/BankAccountList'))
const BankEdit = React.lazy(() => import('./views/pages/banks/BankEdit'))
const BankList = React.lazy(() => import('./views/pages/banks/BankList'))
const CurrencyRateEdit = React.lazy(() => import('./views/pages/currency_rates/CurrencyRateEdit'))
const CurrencyRateList = React.lazy(() => import('./views/pages/currency_rates/CurrencyRateList'))
const UnitEdit = React.lazy(() => import('./views/pages/units/UnitEdit'))
const UnitList = React.lazy(() => import('./views/pages/units/UnitList'))
const ProductCategoryEdit = React.lazy(() => import('./views/pages/product-categories/ProductCategoryEdit'))
const ProductCategoryList = React.lazy(() => import('./views/pages/product-categories/ProductCategoryList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  /*
  { path: '/companies/create', name: 'Create Company', component: CompanyEdit},
  { path: '/companies/edit/:id', name: 'Create Company', component: CompanyEdit},
  */
  { path: '/companies', name: 'Companies', component: CompanyList},
  { path: '/users', name: 'Users', component: UserList},
  { path: '/roles', name: 'Roles', component: RoleList},
  { path: '/permissions', name: 'Permissions', component: PermissionList},
  { path: '/currencies/create-rate', name: 'Create Currency Rate', component: CurrencyRateEdit},
  { path: '/currencies/create', name: 'Create Currency', component: CurrencyEdit},
  { path: '/currencies/:id', name: 'Edit Currency', component: CurrencyEdit},
  { path: '/currencies', name: 'Currencies', component: CurrencyList},
  { path: '/accounts/create', name: 'Create Account', component: AccountEdit},
  { path: '/accounts/:id', name: 'Edit Account', component: AccountEdit},
  { path: '/accounts', name: 'Chart of Accounts', component: AccountList},
  { path: '/tax-codes/create', name: 'Create Tax Code', component: TaxCodeEdit},
  { path: '/tax-codes/:id', name: 'Edit Tax Code', component: TaxCodeEdit},
  { path: '/tax-codes', name: 'Tax Codes', component: TaxCodeList},
  { path: '/banks/create-account', name: 'Create Bank Account', component: BankAccountEdit},
  { path: '/banks/create', name: 'Create Bank', component: BankEdit},
  { path: '/banks/:id', name: 'Edit Bank', component: BankEdit},
  { path: '/banks', name: 'Banks', component: BankList},
  { path: '/bank-accounts/create', name: 'Create Bank Account', component: BankAccountEdit},
  { path: '/bank-accounts/:id', name: 'Edit Bank Account', component: BankAccountEdit},
  { path: '/bank-accounts', name: 'Bank Accounts', component: BankAccountList},
  { path: '/currency-rates/create', name: 'Create Currency Rate', component: CurrencyRateEdit},
  { path: '/currency-rates/:id', name: 'Edit Currency Rate', component: CurrencyRateEdit},
  { path: '/currency-rates', name: 'Currency Rates', component: CurrencyRateList},
  { path: '/units/create', name: 'Create Unit', component: UnitEdit},
  { path: '/units/:id', name: 'Edit Unit', component: UnitEdit},
  { path: '/units', name: 'Units', component: UnitList},
  { path: '/product-categories/create', name: 'Create Product Category', component: ProductCategoryEdit},
  { path: '/product-categories/:id', name: 'Edit Product Category', component: ProductCategoryEdit},
  { path: '/product-categories', name: 'Product Category', component: ProductCategoryList}


]

export default routes
