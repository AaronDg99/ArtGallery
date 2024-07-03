// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Importar Tailwind CSS y tus estilos personalizados

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
