import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useCounts = () => {
  const [counts, setCounts] = useState({
    products: 0,
    orders: 0,
    users: 0,
    categories: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [products, orders, users, categories] = await Promise.all([
          getDocs(collection(db, 'products')),
          getDocs(collection(db, 'orders')),
          getDocs(collection(db, 'users')),
          getDocs(collection(db, 'categories')),
        ]);

        setCounts({
          products: products.size,
          orders: orders.size,
          users: users.size,
          categories: categories.size,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return { counts, loading };
};