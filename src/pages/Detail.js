import React,{Component} from "react";
import '../assets/css/Detail.css'
import zan from '../assets/img/zan.png';
import xing from '../assets/img/xing.png';
import fx from '../assets/img/fx.png';

import axios from 'axios';
import querystring from 'query-string'
import propTypes from "prop-types";

//私有引入
// import date from '../api/date';

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Detail extends Component {
  state={
    data:{}
  }

  static contextTypes = {
    appData: propTypes.string,
  };

  render() {
    let data = this.props.store.detail.data;
    return (
      <React.Fragment>
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
          </ul>
        </div>
        {
          data.title && (
            <div className="content">
              <div className="header clear"><h2><img src={data.detail.auth_icon} alt=""/></h2><p>{data.detail.auth}</p></div>
              <div className="cont">
                <h3>{data.title}/{this.context.appData}</h3>
                {/*<div className="time"><p>{date(data.time)}<span><img src={zan} alt=""/></span></p>*/}
                <div className="time"><p>{this.date(data.time)}<span><img src={zan} alt=""/></span></p>
                </div>
                <div className="text-box" dangerouslySetInnerHTML={{__html:data.detail.content}}></div>
              </div>
            </div>
          )
        }
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="javascript:;">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="javascript:;">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="javascript:;">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    this.props.store.detail.get({url:`/mock/${dataName}/${id}`})
  }
}

export default Detail;
