import User from "./User";
import List from "./List";
import Detail from "./Detail";
import Bl from "./Bl";

class Store {
  constructor(){
    this.user = new User(this);//给每个类传入 当前 store实例
    this.list = new List(this);
    this.detail = new Detail(this);
    this.bl = new Bl(this);
  }
}

export default new Store();