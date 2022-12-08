import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { FilterProvider } from './context/FilterContext';
import { AppProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AppProvider>

);
