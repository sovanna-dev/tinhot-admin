// src/MyMenu.jsx
import { Menu } from 'react-admin';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="products" icon={<ShoppingBagIcon />} />
    <Menu.ResourceItem name="orders" icon={<ReceiptIcon />} />
    <Menu.ResourceItem name="users" icon={<PeopleIcon />} />
    <Menu.ResourceItem name="categories" icon={<CategoryIcon />} />
    <Menu.ResourceItem name="promotion_banners" icon={<ViewCarouselIcon />} />
  </Menu>
);