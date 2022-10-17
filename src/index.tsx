import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Application from './App';

import theme from './theme';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Application />
        <GlobalStyles />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
