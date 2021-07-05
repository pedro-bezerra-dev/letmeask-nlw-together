import React from 'react';
import ReactDOM from 'react-dom';

import { Toaster } from 'react-hot-toast';

import App from './App';

import './services/firebase';

import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root'),
);
