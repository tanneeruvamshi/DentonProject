import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css'

// If you're using React 18 or newer, you should use createRoot instead
// import { createRoot } from 'react-dom/client';

// React 18 or newer setup
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// React 17 setup
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
