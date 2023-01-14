import React from 'react';

import { StoreProvider } from './store/AppStore/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>
);
