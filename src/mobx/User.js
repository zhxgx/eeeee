import {observable,action} from 'mobx';
import axios from 'axios';

class User {

  @observable error = 1;
  @observable msg = "登录失败";
  @observable page_data = {};

  constructor(store){
    this.store = store
  }

  @action get = ({url,username,password}) => {

    //:'/mock/home/1'
    return axios({url,params:{username,password}}).then(
      res=>{
        this.error = res.data.error;
        this.msg = res.data.msg;
        this.page_data = res.data.page_data;
        return res.data.error
      }
    )
  }


}

export default User;