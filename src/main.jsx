import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Router from './Routes/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router}/>
  </AuthProvider>,
)
