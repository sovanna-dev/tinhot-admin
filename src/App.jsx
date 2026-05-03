// src/App.jsx
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import { ThemeProvider } from '@mui/material/styles';
import {firebaseConfig} from './firebase';
import { tinhotTheme } from './theme';
import Dashboard from './Dashboard';
import MyLayout from './MyLayout';

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
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
        <Resource 
          name="products" 
          list={ListGuesser} 
          options={{ label: '📦 Products' }} 
        />
        <Resource 
          name="orders" 
          list={ListGuesser} 
          options={{ label: '🛒 Orders' }} 
        />
        <Resource 
          name="users" 
          list={ListGuesser} 
          options={{ label: '👥 Users' }} 
        />
        <Resource 
          name="categories" 
          list={ListGuesser} 
          options={{ label: '🏷️ Categories' }} 
        />
      </Admin>
    </ThemeProvider>
  );
}

export default App;