// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList, UserEdit } from './components/users';
import authProvider from './authProvider';
import Dashboard from './components/dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import dataProvider from './dataProvider';
import CustomLoginPage from './CustomLoginPage';

const App = () => (
  <Admin loginPage={CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="admin/users" options={{ label: 'Users' }} icon={UserIcon} list={UserList} edit={UserEdit} />
  </Admin>
);

export default App;
