import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entry Point Utama Aplikasi Web Portfolio
 * 
 * Melakukan inisialisasi Root Virtual DOM React pada elemen HTML `#root`
 * dan me-render komponen `App` utama di dalam mode `React.StrictMode`.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

