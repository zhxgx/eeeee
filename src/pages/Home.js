import React,{Component} from "react";
import '../assets/css/HOme.css'
import Swiper from "../components/Swiper";
import Cell from "../components/Cell";

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Home extends Component {
  constructor(props){
    super();
    //读取数据
    props.store.list.get({url: '/mock/home',params:{_limit:10},propsName: 'home'});
    props.store.list.get({url: '/mock/banner',params:{_limit:3},propsName: 'banner'});
  }
  render() {
    let {home,banner} = this.props.store.list;
    console.log('home', home, banner);
    return (
      <div className="Home">
        <Swiper {...this.props} banners={banner} dataName="banner"/>
        <Cell cells={home} dataName="home"/>
      </div>
    );
  }
}

export default Home;

