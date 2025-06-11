import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);
// below code 3/27/25 for the erro
window.addEventListener('error', e => {
   if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
     e.preventDefault();
   }
 });
 

reportWebVitals();
