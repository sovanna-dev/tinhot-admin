// src/components/ProductComponents.jsx
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
  BooleanField,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';

// List View - Shows all products
export const ProductList = (props) => (
  <List {...props} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Slay Name" />
      <NumberField source="price" label="Price ($)" />
      <NumberField source="stockQuantity" label="Stock" />
      <TextField source="category" label="Vibe Category" />
      <NumberField source="rating" label="Vibe Rating" />
      <BooleanField source="isAvailable" label="Ready to Slay?" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Edit View - Edit existing product
export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* Basic Info */}
      <TextInput source="name" label="Slay name" fullWidth required />
      <TextInput source="description" label="Tell the tea about this product" multiline rows={3} fullWidth />
      
      {/* Barcode */}
      <TextInput source="barcode" label="Barcode" fullWidth />
      
      {/* Pricing */}
      <NumberInput source="price" label="Price ($)" required />
      <NumberInput source="discountPrice" label="Discount Price (Steal?)" />
      
      {/* Category */}
      <TextInput source="category" label="Vibe Category" fullWidth />
      
      {/* Stock */}
      <NumberInput source="stockQuantity" label="How many in stock?" />
      
      {/* Rating & Reviews */}
      <NumberInput source="rating" label="Vibe Rating (1-5)" step={0.1} min={0} max={5} />
      <NumberInput source="reviewCount" label="How many peeps talked about it?" />
      
      {/* Availability */}
      <BooleanInput source="isAvailable" label="Is it ready to slay? (Available)" />
      
      {/* Colors Array */}
      <ArrayInput source="colors" label="Available Vibes (Colors)">
        <SimpleFormIterator>
          <TextInput source="" label="Color" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* Specifications Array (Map<String, String>) */}
      <ArrayInput source="specifications" label="The Technical Tea">
        <SimpleFormIterator>
          <TextInput source="key" label="Spec name" helperText="e.g., Brand, Material, Weight" />
          <TextInput source="value" label="Spec value" helperText="e.g., Samsung, Cotton, 500g" />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* Images Array */}
      <ArrayInput source="images" label="Slay Pics">
        <SimpleFormIterator>
          <TextInput source="" label="Paste the pic link here" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

// Create View - Add new product
export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* Basic Info */}
      <TextInput source="name" label="Slay name" fullWidth required />
      <TextInput source="description" label="Tell the tea about this product" multiline rows={3} fullWidth />
      
      {/* Barcode */}
      <TextInput source="barcode" label="Barcode" fullWidth />
      
      {/* Pricing */}
      <NumberInput source="price" label="Price ($)" required />
      <NumberInput source="discountPrice" label="Discount Price (Steal?)" />
      
      {/* Category */}
      <TextInput source="category" label="Vibe Category" fullWidth required />
      
      {/* Stock */}
      <NumberInput source="stockQuantity" label="How many in stock?" defaultValue={0} />
      
      {/* Rating & Reviews */}
      <NumberInput source="rating" label="Vibe Rating (1-5)" step={0.1} min={0} max={5} defaultValue={0} />
      <NumberInput source="reviewCount" label="How many peeps talked about it?" defaultValue={0} />
      
      {/* Availability */}
      <BooleanInput source="isAvailable" label="Is it ready to slay? (Available)" defaultValue={true} />
      
      {/* Colors Array */}
      <ArrayInput source="colors" label="Available Vibes (Colors)">
        <SimpleFormIterator>
          <TextInput source="" label="Color" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* Specifications Array (Map<String, String>) */}
      <ArrayInput source="specifications" label="The Technical Tea">
        <SimpleFormIterator>
          <TextInput source="key" label="Spec name" helperText="e.g., Brand, Material, Weight" />
          <TextInput source="value" label="Spec value" helperText="e.g., Samsung, Cotton, 500g" />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* Images Array */}
      <ArrayInput source="images" label="Slay Pics">
        <SimpleFormIterator>
          <TextInput source="" label="Paste the pic link here" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);