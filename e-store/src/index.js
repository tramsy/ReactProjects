import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './index.css';
import { AppProvider } from './Context';
import {BrowserRouter} from 'react-router-dom';

reactDom.render(
    <AppProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppProvider>
, document.getElementById('root'));