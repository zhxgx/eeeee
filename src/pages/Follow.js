import React,{Component} from "react";
import '../assets/css/Follow.css'
import Cell from "../components/Cell";
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Follow extends Component {
  render() {
    return (
      <div className="Follow">
        <Cell cells={this.props.store.list.follow} dataName="follow"/>
      </div>
    );
  }
  componentDidMount(){
    this.props.store.list.get({url: '/mock/follow',params:{_limit:10},propsName: 'follow'});
  }
}

export default Follow;