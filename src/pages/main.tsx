import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App'
import { ToastContainer } from 'react-toastify';
import { CardProvider } from '../hooks/Card';
import { PaginationProvider } from '../hooks/Pagination';

import './main.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PaginationProvider>
      <CardProvider>
        <App />
        <ToastContainer />
      </CardProvider>
    </PaginationProvider>
  </React.StrictMode>
)
