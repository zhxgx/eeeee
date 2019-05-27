import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {observer,inject} from 'mobx-react'

//路由守卫 条件 同步    应用场景 本地存储|文本存储|
//流程: user里面 取localStorage 取不到 去向login->取数据->存取localStorage->跳转到user

let AuthRoute = observer(({ component: Component,store, ...rest }) => (
  <Route {...rest} render={props =>
    store.user.error === 0 ?
      <Component {...props} />
      : <Redirect to="/login" />
  }
  />
));

export default inject('store')(AuthRoute)

