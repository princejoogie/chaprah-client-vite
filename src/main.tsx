import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/react-query-config';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root'),
);
