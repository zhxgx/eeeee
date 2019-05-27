import React, {Component} from "react";
import '../assets/css/Login.css'
import {Link} from 'react-router-dom'

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Login extends Component {
  state = {
    username: '',
    password: '',

  }
  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  submit = async () => {
    this.props.store.user.get({
      url: '/mock/login',
      username: this.state.username,
      password: this.state.password,
    }).then(
      error => {
        console.log(error);
        if (error === 0) {
          localStorage.setItem('rc_user', JSON.stringify(this.props.store.user))
          this.props.history.push('/user')
        } else {
          alert(1)
        }
      }
    )


  }

  render() {
    return (
      <div className="content">
        <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" name="username" value={this.state.username} onChange={this.changeIpt}/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" name="password" value={this.state.password} onChange={this.changeIpt}/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="登 录" className="login-btn" onClick={this.submit}/>
          <a href="javascript:;" className="tishi">忘记密码？</a>
        </div>
      </div>
    );
  }
}

export default Login;