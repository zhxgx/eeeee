import React,{Component} from "react";

import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../library/swipe';

class Swiper extends Component {
  render() {
    let {banners} = this.props;
    return (
      <div className="banner">
        <ul className="clearfix">
          {
            banners.map(item => (
              <li
                key={item.id}
                onClick={()=>{this.toDetail(item.id)}}
              >

                <img src={item.banner} alt=""/>
                <div className="text-box">
                  <h2>{item.title}</h2>
                  <p>{item.sub_title}</p>
                </div>
              </li>
            ))
          }
        </ul>

      </div>
    );
  }

  toDetail(id){
    //编程式跳转
    this.props.history.push({pathname:'/detail/'+id, search:'?dataName='+this.props.dataName})
  }

  componentDidUpdate(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}

export default Swiper;