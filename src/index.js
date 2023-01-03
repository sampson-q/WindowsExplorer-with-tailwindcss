import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExplorerWindow from './components/explorerWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExplorerWindow />
  </React.StrictMode>
);

