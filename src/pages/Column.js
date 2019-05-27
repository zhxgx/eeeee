import React,{Component} from "react";
import '../assets/css/Column.css'
import Cell from "../components/Cell";
import axios from "axios";

class Column extends Component {
  state={
    cells:[]
  };
  render() {
    return (
      <div className="Column">
        <Cell cells={this.state.cells} dataName="column"/>
      </div>
    );
  }
  async componentDidMount(){
    let res = await axios({url:'/mock/column',params:{_limit:6}});
    this.setState({cells:res.data.page_data})
  }
}

export default Column;