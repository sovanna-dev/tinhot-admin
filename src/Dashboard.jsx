// src/Dashboard.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Skeleton } from '@mui/material';
import { Title } from 'react-admin';
import { useCounts } from './hooks/useCounts';

const Dashboard = () => {
  const { counts, loading } = useCounts();

  const statsCards = [
    {
      title: '📦 Products',
      value: counts.products,
      bgColor: '#FF006E',
    },
    {
      title: '🛒 Orders',
      value: counts.orders,
      bgColor: '#8338EC',
    },
    {
      title: '👥 Users',
      value: counts.users,
      bgColor: '#3A86FF',
    },
    {
      title: '🏷️ Categories',
      value: counts.categories,
      bgColor: '#FFBE0B',
      textColor: '#1A1A1A',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title title="Tinh Ot Slay Dashboard" />
      
      {/* Logo Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mb: 4,
          mt: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: { xs: '48px', md: '72px' },
            background: 'linear-gradient(135deg, #FF006E 0%, #8338EC 50%, #3A86FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '0.05em',
            textAlign: 'center',
          }}
        >
          TINH OT SLAY
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            color: '#8338EC',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            letterSpacing: '0.02em',
            mt: -1,
          }}
        >
          👑 Admin Dashboard 👑
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                background: card.bgColor,
                color: card.textColor || 'white',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  {card.title}
                </Typography>
                {loading ? (
                  <Skeleton variant="text" width="60px" height="50px" sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
                ) : (
                  <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {card.value}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Welcome Message */}
      <Card sx={{ borderRadius: 4, mt: 3, background: '#FFF8F5' }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: '#FF006E', fontWeight: 'bold' }}>
            ✨ Welcome back, Bestie! ✨
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
            Manage your products, track orders, and keep your slay game strong! 💅
          </Typography>
          {!loading && (
            <Box sx={{ display: 'flex', gap: 3, mt: 2, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ color: '#FF006E' }}>
                📦 {counts.products} products in store
              </Typography>
              <Typography variant="body2" sx={{ color: '#8338EC' }}>
                🛒 {counts.orders} orders placed
              </Typography>
              <Typography variant="body2" sx={{ color: '#3A86FF' }}>
                👥 {counts.users} happy customers
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;