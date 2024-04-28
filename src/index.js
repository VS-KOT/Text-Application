import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <p style={{ fontWeight: 'bold' }}>
        Made by{' '}
        <a
          href="https://github.com/VS-KOT"
          style={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#007bff'
          }}
        >
          Vinayak Kotwala
        </a>
      </p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
