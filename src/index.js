import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationCtxtProvider } from './context/authenticationCtxt';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationCtxtProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthenticationCtxtProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

