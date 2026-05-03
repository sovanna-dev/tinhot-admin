import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useSalesData = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const ordersSnapshot = await getDocs(collection(db, 'orders'));
        const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const salesByDate = {};
        orders.forEach(order => {
          if (order.createdAt && order.createdAt.toDate) {
            const date = order.createdAt.toDate().toLocaleDateString();
            const amount = order.totalAmount || 0;
            salesByDate[date] = (salesByDate[date] || 0) + amount;
          }
        });

        const chartData = Object.entries(salesByDate)
          .map(([date, sales]) => ({ date, sales }))
          .slice(-7);

        setSalesData(chartData);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  return { salesData, loading };
};