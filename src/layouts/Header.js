import React,{Component} from "react";
import style from  '../assets/css/Header.module.css'
import { NavLink, withRouter } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className={style.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={style.active}>首页</NavLink>
          </li>
          <li>
            <NavLink to="/follow" activeClassName={style.active}>关注</NavLink>
          </li>
          <li>
            <NavLink to="/column" activeClassName={style.active}>栏目</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);