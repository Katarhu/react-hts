import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import AlertProvider from "./context/AlertContext";

import App from './App'

import './index.css'
import CoursesProvider from './context/CoursesContext';
import AuthorsProvider from './context/AuthorsContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <AuthProvider>
        <AlertProvider>
            <CoursesProvider>
                <AuthorsProvider>
                    <Router>
                        <App />
                    </Router>
                </AuthorsProvider>
            </CoursesProvider>
        </AlertProvider>
    </AuthProvider>
  </React.StrictMode>
)
