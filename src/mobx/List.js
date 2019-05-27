import {observable,action} from 'mobx';
import axios from 'axios';

class List {

  @observable home = [];
  @observable follow = [];
  @observable column = [];
  @observable banner = [];

  constructor(store){
    this.store = store;
  }

  @action get = async ({url,params,propsName}) => {
    //url: /mock/home|follow , params: {limit:xx,_page:xx} propsName: home
    this.store.bl.viewLoading(true);//希望拿到其他类身上的成员
    let res = await axios({url,params});
    this[propsName] = res.data.page_data;
    this.store.bl.viewLoading(false);
  }

}

export default List;