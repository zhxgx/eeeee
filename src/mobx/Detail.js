import {observable,action} from 'mobx';
import axios from 'axios';

class Detail {

  @observable data = {};

  @action get = async ({url}) => {
    //:'/mock/home/1'
    let res = await axios({url});
    this.data = res.data.page_data;
  }

}

export default Detail;