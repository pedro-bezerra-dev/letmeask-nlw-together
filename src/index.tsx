import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Toaster } from 'react-hot-toast';

import App from './App';

import './services/firebase';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
