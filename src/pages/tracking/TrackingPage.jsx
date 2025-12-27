import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Header } from '../../components/Header';
import { formatDay } from '../../utils/day';
import './TrackingPage.css';

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);

      setOrder(response.data);
    };

    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;

  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let deliveryProgress = (timePassedMs / totalDeliveryTimeMs) * 100;

  if (deliveryProgress > 100) {
    deliveryProgress = 100;
  }

  const isPreparing = deliveryProgress < 33;
  const isShipped = deliveryProgress >= 33 && deliveryProgress < 100;
  const isDelivered = deliveryProgress === 100;

  return (
    <>
      <title>Tracking</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </a>

          <div className="delivery-date">
            {deliveryProgress >= 100 ? 'Delivered on' : 'Arriving on'} {formatDay(order.estimatedDeliveryTimeMs)}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>Preparing</div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>Shipped</div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${deliveryProgress}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
