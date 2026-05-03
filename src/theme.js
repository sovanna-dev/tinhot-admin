// src/theme.js
import { createTheme } from '@mui/material/styles';

export const tinhotTheme = createTheme({
  palette: {
    primary: {
      main: '#FF006E', // Hot Pink
      light: '#FF4D9E',
      dark: '#CC0058',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8338EC', // Purple Haze
      light: '#9E6EFF',
      dark: '#6622CC',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF8F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #FF006E 0%, #8338EC 100%)',
        },
      },
    },
  },
});