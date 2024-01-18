import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App1 from './App1';
import Store from './components/Store/Store'
import {Provider, useSelector} from'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/Login/User';
import Register from './components/Login/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>    <BrowserRouter>
    <App1/>
    </BrowserRouter>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
