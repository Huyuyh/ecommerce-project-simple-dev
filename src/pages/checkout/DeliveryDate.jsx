import { formatDay } from '../../utils/day';
import './CheckoutPage.css';

export function DeliveryDate({ selectedDeliveryOption }) {
  return (
    <div className="delivery-date">Delivery date: {formatDay(selectedDeliveryOption.estimatedDeliveryTimeMs)}</div>
  );
}
