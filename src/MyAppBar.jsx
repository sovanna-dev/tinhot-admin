// src/MyAppBar.jsx
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useAuthenticated } from 'react-admin';

const MyAppBar = (props) => {
  useAuthenticated();
  
  return (
    <AppBar {...props} position="sticky" sx={{ background: 'linear-gradient(90deg, #FF006E 0%, #8338EC 100%)' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Bebas Neue, cursive',
            letterSpacing: '0.05em',
            flexGrow: 1,
            fontSize: '24px',
          }}
        >
          ⚡ TINH OT SLAY ⚡
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <span>🛍️</span>
          <span>💅</span>
          <span>✨</span>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;