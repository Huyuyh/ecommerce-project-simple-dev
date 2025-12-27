import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutGrid } from './CheckoutGrid';
import './CheckoutPage.css';
import { CheckoutPageHeader } from './CheckoutPageHeader';

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
      setDeliveryOptions(response.data);
    });

    axios.get('/api/payment-summary').then((response) => {
      setPaymentSummary(response.data);
    });

    const getCheckoutData = async () => {
      const getDeliveryOptionResponse = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');

      setDeliveryOptions(getDeliveryOptionResponse.data);

      const getPaymentSummaryResponse = await axios.get('/api/payment-summary');

      setPaymentSummary(getPaymentSummaryResponse.data);
    };

    getCheckoutData();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <CheckoutPageHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <CheckoutGrid deliveryOptions={deliveryOptions} cart={cart} paymentSummary={paymentSummary} />
      </div>
    </>
  );
}
