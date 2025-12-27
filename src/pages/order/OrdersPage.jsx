import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { OrderGrid } from './OrderGrid';
import './OrdersPage.css';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get('/api/orders?expand=products');

      setOrders(response.data);
    };

    getOrderData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} />
      </div>
    </>
  );
}
