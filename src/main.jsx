import React from 'react';
import ReactDOM from 'react-dom/client';
import { WaitingStateProvider } from './context/WaitingStateProvider.jsx';
import App from './App.jsx';
import './index.css';
const value = false;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WaitingStateProvider>
      <App />
    </WaitingStateProvider>
  </React.StrictMode>
);
