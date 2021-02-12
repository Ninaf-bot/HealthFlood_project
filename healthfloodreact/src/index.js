import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';
import Product from './Product';
import Nav from './Nav';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
