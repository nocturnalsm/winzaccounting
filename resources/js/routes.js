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
  { path: '/currencies/create', name: 'Create Currency', component: CurrencyEdit},
  { path: '/currencies/:id', name: 'Edit Currency', component: CurrencyEdit},
  { path: '/currencies', name: 'Currencies', component: CurrencyList},
  { path: '/accounts/create', name: 'Create Account', component: AccountEdit},
  { path: '/accounts/:id', name: 'Edit Account', component: AccountEdit},
  { path: '/accounts', name: 'Chart of Accounts', component: AccountList},
  { path: '/tax-codes/create', name: 'Create Tax Code', component: TaxCodeEdit},
  { path: '/tax-codes/:id', name: 'Edit Tax Code', component: TaxCodeEdit},
  { path: '/tax-codes', name: 'Tax Codes', component: TaxCodeList}
]

export default routes
