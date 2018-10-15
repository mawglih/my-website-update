import React from 'react';
import  { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import './index.css';

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);
