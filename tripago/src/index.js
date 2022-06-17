// To run the development server:
// 1st, install json-server on port 3000: npm install -g json server
// 2nd, link to the db.json file: npx json-server --watch ./data/db.json
// 3rd: run the delvelopment server on port 3001: npm run start

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


