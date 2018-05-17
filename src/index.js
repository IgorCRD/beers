import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createRoutes from './app-routes';

const root = document.getElementById('app');

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>{createRoutes()}</Router>, root);
