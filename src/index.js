import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router-dom';

import App from './App';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './hooks/useAuth';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.Fragment>
);
