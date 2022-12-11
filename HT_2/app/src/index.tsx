import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'

import AlertProvider from "./context/AlertContext";
import AuthProvider from './context/AuthContext';

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider>
        <AlertProvider>
            <Router>
                <App />
            </Router>
        </AlertProvider>
    </AuthProvider>
  </React.StrictMode>
)
