// src/App.jsx
import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import { ThemeProvider } from '@mui/material/styles';
import { firebaseConfig } from './firebase';
import { tinhotTheme } from './theme';
import Dashboard from './Dashboard';
import MyLayout from './MyLayout';

// Import all CRUD components
import { ProductList, ProductEdit, ProductCreate } from './components/ProductComponents';
import { OrderList, OrderEdit } from './components/OrderComponents';
import { UserList, UserEdit } from './components/UserComponents';
import { CategoryList, CategoryEdit, CategoryCreate } from './components/CategoryComponents';
import { BannerList, BannerEdit, BannerCreate } from './components/BannerComponents';  // Add this

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  watch: ['products', 'orders', 'users', 'categories', 'promotion_banners'],  // Add promotion_banners
});

const authProvider = FirebaseAuthProvider(firebaseConfig);

function App() {
  return (
    <ThemeProvider theme={tinhotTheme}>
      <Admin 
        dataProvider={dataProvider} 
        authProvider={authProvider}
        title="Tinh Ot Slay Admin"
        theme={tinhotTheme}
        dashboard={Dashboard}
        layout={MyLayout}
      >
        {/* Products */}
        <Resource 
          name="products" 
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          options={{ label: '📦 Products' }}
        />
        
        {/* Orders */}
        <Resource 
          name="orders" 
          list={OrderList}
          edit={OrderEdit}
          options={{ label: '🛒 Orders' }}
        />
        
        {/* Users */}
        <Resource 
          name="users" 
          list={UserList}
          edit={UserEdit}
          options={{ label: '👥 Users' }}
        />
        
        {/* Categories */}
        <Resource 
          name="categories" 
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          options={{ label: '🏷️ Categories' }}
        />
        
        {/* Banners - NEW */}
        <Resource 
          name="promotion_banners" 
          list={BannerList}
          edit={BannerEdit}
          create={BannerCreate}
          options={{ label: '🎨 Banners' }}
        />
      </Admin>
    </ThemeProvider>
  );
}

export default App;