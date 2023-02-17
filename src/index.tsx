import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';
import Home from 'pages/Home';
import AppRouter from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
