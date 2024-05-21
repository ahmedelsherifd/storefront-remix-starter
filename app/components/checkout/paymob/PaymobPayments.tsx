import { useEffect } from 'react';

async function auth(api_key: string) {
  return await fetch('https://accept.paymob.com/api/auth/tokens', {
    method: 'POST',
    body: JSON.stringify({ api_key }),
  });
}

async function registerOrder(auth_token: string, order: object) {
  return await fetch('https://accept.paymob.com/api/ecommerce/orders', {
    method: 'POST',
    body: JSON.stringify({ auth_token, ...order }),
  });
}

async function paymentKey(auth_token: string, order: object) {
  return await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
    method: 'POST',
    body: JSON.stringify({ auth_token, ...order }),
  });
}

export function PaymobPayments() {
  useEffect(() => {
    const auth_token = auth(process.env.PAYMOB_API_KEY as string);
    registerOrder(auth_token, order);
  }, []);
}
