import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
const CompanyList = React.lazy(() => import('./views/pages/companies/CompanyList'))
const UserList = React.lazy(() => import('./views/pages/users/UserList'))
const RoleList = React.lazy(() => import('./views/pages/roles/RoleList'))
const CurrencyList = React.lazy(() => import('./views/pages/currencies/CurrencyList'))
const TaxCodeList = React.lazy(() => import('./views/pages/taxcodes/TaxCodeList'))

const routes = [  
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/companies', name: 'Companies', component: CompanyList},
  { path: '/users', name: 'Users', component: UserList},
  { path: '/roles', name: 'Roles', component: RoleList},
  { path: '/currencies', name: 'Currencies', component: CurrencyList},
  { path: '/tax-codes', name: 'Tax Codes', component: TaxCodeList},
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
]

export default routes