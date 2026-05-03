// src/components/UserComponents.jsx
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  EditButton,
} from 'react-admin';

// List View - Shows all users
export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="User ID" />
      <TextField source="fullName" label="Name" />
      <EmailField source="email" label="Email" />
      <TextField source="phoneNumber" label="Phone" />
      <EditButton />
    </Datagrid>
  </List>
);

// Edit View - Edit user profile
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" label="User ID" disabled />
      <TextInput source="fullName" label="Full Name" fullWidth />
      <TextInput source="email" label="Email Address" fullWidth disabled />
      <TextInput source="phoneNumber" label="Phone Number" />
      <TextInput source="profilePic" label="Profile Pic URL" fullWidth />
    </SimpleForm>
  </Edit>
);