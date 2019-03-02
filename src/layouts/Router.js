import React from 'react';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Router;