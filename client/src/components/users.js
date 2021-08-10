// in src/users.js
import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, SimpleList, TextField, EmailField, TextInput,
         EditButton, Edit, SimpleForm } from 'react-admin';
import MyUrlField from './MyUrlField';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
      <List filters={postFilters} {...props}>
        {isSmall ? (
              <SimpleList
                  primaryText={record => record.name}
                  secondaryText={record => (
                    <a href={'mailto:' +  record.email}>
                      { record.email }
                    </a>
                  )}
              />
          ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <EditButton />
            </Datagrid>
          )}
      </List>
    )
};

export const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="email" />
      </SimpleForm>
  </Edit>
);