import React,{Component} from "react";
import '../assets/css/Reg.css'
import {Link} from "react-router-dom";
import axios from "axios";
class Reg extends Component {
  goback=()=>{
    this.props.history.go(-1)
  };

  state={
    username:'',
    password:'',

  }
  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  submit = async () => {
    let res = await axios({
      url:'/mock/reg',
      params:{
        username:this.state.username,
        password:this.state.password
      }
    });

    // console.log(res)
    if (res.data.error===0){
      //写入local && 跳转user
      localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
      this.props.history.push('/user')
    } else {
      alert('失败')
    }
  }
  render() {
    return (
      <div className="content">
        <p className="fhbtn"><a href="javascript:;" onClick={this.goback}></a></p>
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
          <input type="button" value="注 册" className="login-btn"onClick={this.submit}/>
          <a href="javascript:;" className="tishi">忘记密码？</a>
        </div>
      </div>
    );
  }
}

export default Reg;