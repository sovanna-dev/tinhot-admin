// src/Dashboard.jsx
import { 
  Card, CardContent, Typography, Grid, Box, Skeleton, 
  Table, TableHead, TableRow, TableCell, TableBody, Chip 
} from '@mui/material';
import { Title } from 'react-admin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Import all hooks
import { useCounts } from './hooks/useCounts';
import { useSalesData } from './hooks/useSalesData';
import { useRecentOrders } from './hooks/useRecentOrders';
import { useLowStock } from './hooks/useLowStock';

const Dashboard = () => {
  // Get data from all hooks
  const { counts, loading } = useCounts();
  const { salesData, loading: salesLoading } = useSalesData();
  const { orders: recentOrders, loading: ordersLoading } = useRecentOrders();
  const { lowStockProducts, loading: lowStockLoading } = useLowStock();

  // Stats cards with emojis (no Material icons)
  const statsCards = [
    { title: 'Products', value: counts.products, bgColor: '#FF006E', emoji: '📦' },
    { title: 'Orders', value: counts.orders, bgColor: '#8338EC', emoji: '🛒' },
    { title: 'Users', value: counts.users, bgColor: '#3A86FF', emoji: '👥' },
    { title: 'Categories', value: counts.categories, bgColor: '#FFBE0B', emoji: '🏷️', textColor: '#1A1A1A' },
  ];

  // Get status color for order chips
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return '#4CAF50';
      case 'shipped': return '#2196F3';
      case 'processing': return '#FF9800';
      case 'cancelled': return '#f44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Title title="Tinh Ot Slay Dashboard" />
      
      {/* ===== LOGO SECTION ===== */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 4, mt: 2 }}>
        <Typography variant="h1" sx={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: { xs: '48px', md: '72px' },
          background: 'linear-gradient(135deg, #FF006E 0%, #8338EC 50%, #3A86FF 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '0.05em',
          textAlign: 'center',
        }}>
          TINH OT SLAY
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#8338EC', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', mt: -1 }}>
          👑 Admin Dashboard 👑
        </Typography>
      </Box>

      {/* ===== STATS CARDS ===== */}
      <Grid container spacing={3}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{
              borderRadius: 4,
              background: card.bgColor,
              color: card.textColor || 'white',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'translateY(-5px)' },
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: 28 }}>{card.emoji}</span>
                  {card.title}
                </Typography>
                {loading ? (
                  <Skeleton variant="text" width="60px" height="50px" sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
                ) : (
                  <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 1 }}>{card.value}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ===== SALES CHART ===== */}
      <Card sx={{ borderRadius: 4, mt: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: '#FF006E', fontWeight: 'bold', mb: 2 }}>📈 Sales Trend (Last 7 Days)</Typography>
          {salesLoading ? (
            <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />
          ) : salesData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#FF006E" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Typography variant="body2" sx={{ textAlign: 'center', py: 4, color: '#666' }}>No sales data yet</Typography>
          )}
        </CardContent>
      </Card>

      {/* ===== RECENT ORDERS TABLE ===== */}
      <Card sx={{ borderRadius: 4, mt: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: '#8338EC', fontWeight: 'bold', mb: 2 }}>🛒 Recent Orders</Typography>
          {ordersLoading ? (
            <Skeleton variant="rectangular" height={200} />
          ) : recentOrders.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#FFF8F5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Order ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>#{order.orderId?.slice(-8) || order.id?.slice(-8)}</TableCell>
                    <TableCell>{order.userId || 'Guest'}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#FF006E' }}>${order.total?.toFixed(2) || '0'}</TableCell>
                    <TableCell>
                      <Chip label={order.orderStatus || 'Pending'} size="small" sx={{ bgcolor: getStatusColor(order.orderStatus), color: 'white', fontWeight: 'bold' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography sx={{ textAlign: 'center', py: 4 }}>No orders yet</Typography>
          )}
        </CardContent>
      </Card>

      {/* ===== LOW STOCK ALERT ===== */}
      {!lowStockLoading && lowStockProducts.length > 0 && (
        <Card sx={{ borderRadius: 4, mt: 3, bgcolor: '#FFF3E0', border: '1px solid #FB5607' }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#FB5607', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
              ⚠️ Low Stock Alert
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {lowStockProducts.map(product => (
                <Chip key={product.id} label={`${product.name}: ${product.stockQuantity || product.stock} left`} sx={{ bgcolor: '#FB5607', color: 'white' }} />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}

      {/* ===== WELCOME MESSAGE ===== */}
      <Card sx={{ borderRadius: 4, mt: 3, background: '#FFF8F5' }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: '#FF006E', fontWeight: 'bold' }}>✨ Welcome back, Bestie! ✨</Typography>
          <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>Manage your products, track orders, and keep your slay game strong! 💅</Typography>
          {!loading && (
            <Box sx={{ display: 'flex', gap: 3, mt: 2, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ color: '#FF006E' }}>📦 {counts.products} products in store</Typography>
              <Typography variant="body2" sx={{ color: '#8338EC' }}>🛒 {counts.orders} orders placed</Typography>
              <Typography variant="body2" sx={{ color: '#3A86FF' }}>👥 {counts.users} happy customers</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
