// src/components/OrderComponents.jsx
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateField,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';

// List View - Shows all orders
export const OrderList = (props) => (
  <List {...props} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="edit">
      <TextField source="orderId" label="Order ID" />
      <TextField source="userId" label="User ID" />
      <NumberField source="total" label="Total ($)" />
      <TextField source="orderStatus" label="Status" />
      <TextField source="paymentMethod" label="Payment" />
      <DateField source="createdAt" label="Order Date" />
    </Datagrid>
  </List>
);

// Edit View - Update order status
export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="orderId" label="Order ID" disabled />
      <TextInput source="userId" label="User ID" disabled />
      <NumberInput source="subtotal" label="Subtotal ($)" disabled />
      <NumberInput source="shippingCost" label="Shipping Cost ($)" disabled />
      <NumberInput source="total" label="Total ($)" disabled />
      
      <SelectInput 
        source="orderStatus" 
        label="Order Status"
        choices={[
          { id: 'PENDING', name: 'Pending' },
          { id: 'PROCESSING', name: 'Processing' },
          { id: 'SHIPPING', name: 'Shipping' },
          { id: 'DELIVERED', name: 'Delivered' },
          { id: 'CANCELLED', name: 'Cancelled' },
        ]}
      />
      
      <TextInput source="paymentMethod" label="Payment Method" disabled />
      
      {/* Shipping Address */}
      <TextInput source="shippingAddress.fullName" label="Full Name" fullWidth />
      <TextInput source="shippingAddress.phoneNumber" label="Phone Number" />
      <TextInput source="shippingAddress.streetAddress" label="Street Address" fullWidth />
      <TextInput source="shippingAddress.city" label="City" />
      <TextInput source="shippingAddress.province" label="Province" />
      <TextInput source="shippingAddress.postalCode" label="Postal Code" />
      <TextInput source="shippingAddress.additionalInfo" label="Additional Info" fullWidth />
      
      {/* Items Array */}
      <ArrayInput source="items" label="Order Items">
        <SimpleFormIterator>
          <TextInput source="productId" label="Product ID" />
          <TextInput source="name" label="Product Name" />
          <NumberInput source="price" label="Price" />
          <NumberInput source="quantity" label="Quantity" />
        </SimpleFormIterator>
      </ArrayInput>
      
      {/* Tracking Steps */}
      <ArrayInput source="trackingSteps" label="Tracking Steps">
        <SimpleFormIterator>
          <TextInput source="id" label="Step ID" />
          <TextInput source="title" label="Title" />
          <TextInput source="description" label="Description" />
        </SimpleFormIterator>
      </ArrayInput>
      
      <DateField source="createdAt" label="Created At" showTime />
      <DateField source="updatedAt" label="Updated At" showTime />
    </SimpleForm>
  </Edit>
);