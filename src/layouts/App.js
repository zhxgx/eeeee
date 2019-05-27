import React,{Component} from "react";
import '../assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import AuthRoute from "../guard/Auth";
import Loading from "../components/Loading";

import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class App extends Component {

  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkRoute(path);
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkRoute(path);
  }

  checkRoute = (path) => {
    // console.log(path)
    let {viewNav,viewFoot} = this.props.store.bl;
    if (/home|follow|column/.test(path)){
      viewNav(true);viewFoot(true);
    }
    if (/login|reg|detail/.test(path)){
      viewNav(false);viewFoot(false);
    }
    if (/user/.test(path)){
      viewNav(false);viewFoot(true);
    }
  };

  render() {
    let {bNav,bFoot,bLoading} = this.props.store.bl;
    return (
      <>
        {bLoading && <Loading/>}
        {bNav && <Header/>}

        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>
          <AuthRoute path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={Error}/>
        </Switch>
        {bFoot && <Footer {...this.props} />}

      </>
    );
  }
}

export default App;

