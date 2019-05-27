import {observable,action} from 'mobx';
class Bl {

  @observable bNav = true;
  @observable bFoot = true;
  @observable bLoading = false;

  constructor(store){
    this.store = store
  }

  @action viewNav = (bl) => this.bNav = bl

  @action viewFoot = (bl) => this.bFoot = bl

  @action viewLoading = (bl) => this.bLoading = bl


}

export default Bl;