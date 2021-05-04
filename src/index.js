import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ServiceProvider} from './Context';


ReactDOM.render(
  <React.StrictMode>
    <ServiceProvider>
      <App />
    </ServiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

