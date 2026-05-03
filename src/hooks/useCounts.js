// src/hooks/useCounts.js
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

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
        // Fetch products count
        const productsSnapshot = await getDocs(collection(db, 'products'));
        const productsCount = productsSnapshot.size;

        // Fetch orders count
        const ordersSnapshot = await getDocs(collection(db, 'orders'));
        const ordersCount = ordersSnapshot.size;

        // Fetch users count
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const usersCount = usersSnapshot.size;

        // Fetch categories count
        const categoriesSnapshot = await getDocs(collection(db, 'categories'));
        const categoriesCount = categoriesSnapshot.size;

        setCounts({
          products: productsCount,
          orders: ordersCount,
          users: usersCount,
          categories: categoriesCount,
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