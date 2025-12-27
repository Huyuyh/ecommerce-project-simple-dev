import { Route, Routes } from 'react-router';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { OrdersPage } from './pages/order/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data);
    });

    const getAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');

      setCart(response.data);
    };

    getAppData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
