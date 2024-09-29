import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/index.css';
import GlobalContext from './context/GlobalContext';
import ThemeContext from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContext>
    <BrowserRouter>
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
  </GlobalContext>
);
