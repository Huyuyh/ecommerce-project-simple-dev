import { OrderDetail } from './OrderDetail';
import './OrdersPage.css';

export function OrderGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderDetail order={order} />
          </div>
        );
      })}
    </div>
  );
}
