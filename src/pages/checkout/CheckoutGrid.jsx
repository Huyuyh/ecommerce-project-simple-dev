import './CheckoutPage.css';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutGrid({ deliveryOptions, cart, paymentSummary }) {
  return (
    <div className="checkout-grid">
      <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

      <PaymentSummary paymentSummary={paymentSummary} />
    </div>
  );
}
