import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';
import { AppProvider } from './context/ProductContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-1oo7knjbtb1buk7u.us.auth0.com"
    clientId="1OKR1zijTrexalSza8Cyb1hYru8qldQ4"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </Auth0Provider>
);
