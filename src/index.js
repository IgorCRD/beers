import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createRoutes from './app-routes';

const root = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>{createRoutes()}</BrowserRouter>,
  root,
);
