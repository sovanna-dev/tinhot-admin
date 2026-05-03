// src/components/BannerComponents.jsx
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
  DeleteButton,
  BooleanField,
  BooleanInput,
} from 'react-admin';

// List View - Shows all banners
export const BannerList = (props) => (
  <List {...props} sort={{ field: 'isActive', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Banner Title" />
      <TextField source="subtitle" label="Subtitle" />
      <TextField source="backgroundColor" label="Background Color" />
      <BooleanField source="isActive" label="Active?" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Edit View - Edit existing banner
export const BannerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Banner Title" fullWidth required />
      <TextInput source="subtitle" label="Subtitle" fullWidth />
      <TextInput source="imageUrl" label="Image URL" fullWidth />
      <TextInput source="actionUrl" label="Action URL (link when clicked)" fullWidth />
      <TextInput source="backgroundColor" label="Background Color (Hex code)" fullWidth />
      <BooleanInput source="isActive" label="Is Active?" />
    </SimpleForm>
  </Edit>
);

// Create View - Add new banner
export const BannerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Banner Title" fullWidth required />
      <TextInput source="subtitle" label="Subtitle" fullWidth />
      <TextInput source="imageUrl" label="Image URL" fullWidth required />
      <TextInput source="actionUrl" label="Action URL (link when clicked)" fullWidth />
      <TextInput source="backgroundColor" label="Background Color (Hex code)" defaultValue="#FF006E" fullWidth />
      <BooleanInput source="isActive" label="Is Active?" defaultValue={true} />
    </SimpleForm>
  </Create>
);