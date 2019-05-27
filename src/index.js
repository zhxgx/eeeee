import React from 'react';
import ReactDom from 'react-dom';

import './assets/css/base.css';//基础样式引入
import './library/font';

import App from './layouts/App'

import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'mobx-react';

import date from './api/date';
import store from "./mobx";

React.Component.prototype.date=date;

//取local存state
let  local = JSON.parse(localStorage.getItem('rc_user'));
if (local) {
  store.user.error=local.error;
  store.user.page_data=local.page_data
}


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>

  ,
  document.querySelector('#root')
);