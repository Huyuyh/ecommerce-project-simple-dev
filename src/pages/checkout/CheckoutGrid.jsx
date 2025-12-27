import './CheckoutPage.css';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutGrid({ deliveryOptions, cart, paymentSummary, loadCart }) {
  return (
    <div className="checkout-grid">
      <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />

      <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
    </div>
  );
}
