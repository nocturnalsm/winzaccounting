// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/posts';
import { UserList } from './components/users';
import authProvider from './authProvider';
import Dashboard from './components/dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import jsonServerProvider from 'ra-data-json-server';
import CustomLoginPage from './CustomLoginPage';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin loginPage={CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" icon={UserIcon} list={UserList} />
  </Admin>
);

export default App;
