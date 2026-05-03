import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useLowStock = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLowStock = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, 'products'));
        const lowStock = productsSnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(product => product.stock > 0 && product.stock <= 10);
        
        setLowStockProducts(lowStock);
      } catch (error) {
        console.error('Error fetching low stock:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLowStock();
  }, []);

  return { lowStockProducts, loading };
};