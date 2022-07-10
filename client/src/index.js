import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <AuthProvider>
        <App />
      </AuthProvider>
);

reportWebVitals();
