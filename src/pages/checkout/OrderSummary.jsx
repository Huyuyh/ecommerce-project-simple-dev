import { CartItem } from './CartItem';
import './CheckoutPage.css';
import { DeliveryDate } from './DeliveryDate';
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ deliveryOptions, cart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItem cartItem={cartItem} />

                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
