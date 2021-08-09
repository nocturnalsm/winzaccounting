// in src/users.js
import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, SimpleList, TextField, EmailField, TextInput } from 'react-admin';
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
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
          )}
      </List>
    )
};
