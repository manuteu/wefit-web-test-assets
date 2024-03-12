import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { MyContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <Routes />
    </MyContextProvider>
  </React.StrictMode>
);

reportWebVitals();
