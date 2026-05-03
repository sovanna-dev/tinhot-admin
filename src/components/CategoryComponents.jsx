// src/components/CategoryComponents.jsx
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
  EditButton,
  DeleteButton,
} from 'react-admin';

// List View - Shows all categories
export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Category Name" />
      <TextField source="icon" label="Icon" />
      <NumberField source="productCount" label="Products" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Edit View - Edit category
export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Category Name" fullWidth required />
      <TextInput source="icon" label="Icon URL or Name" fullWidth />
      <NumberInput source="productCount" label="Product Count" />
    </SimpleForm>
  </Edit>
);

// Create View - Add new category
export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Category Name" fullWidth required />
      <TextInput source="icon" label="Icon URL or Name" fullWidth />
      <NumberInput source="productCount" label="Product Count" defaultValue={0} />
    </SimpleForm>
  </Create>
);