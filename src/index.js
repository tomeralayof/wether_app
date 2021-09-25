import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery/dist/jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter} from "react-router-dom";
//redux
import {createStore} from 'redux';
import {allReducers} from "./redux/reducer/index";
import {Provider} from "react-redux";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store = {store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);