import React from 'react';
import ReactDOM from 'react-dom';

import { Toaster } from 'react-hot-toast';

import App from './App';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root'),
);
