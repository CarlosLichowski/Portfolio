// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Importa el archivo directamente para ejecutar el código de configuración
import i18n from './i18n/i18n';

i18n; // Silencia el error de "never read"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);