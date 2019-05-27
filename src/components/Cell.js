import React from "react";

import '../assets/css/Cell.css'

import {Link} from 'react-router-dom'

/*class Cell extends Component {
  render() {
    let {cells, dataName} = this.props;
    return (
      <div className="cell">
        {
          cells.map(item => (
            <Link
              key={item.id}
              to={{
                pathname:'/detail/' + item.id,
                search:"?dataName=" + dataName
              }}
            >
              <h2>{item.id}.{item.title}</h2>
              <p>{item.des}</p>
            </Link>
          ) )
        }

      </div>
    );
  }
}*/

let Cell = (props) => {
  let {cells,dataName} = props;
  return (
    <div className="cell">
      {
        cells.map(item => (
          <Link
            key={item.id}
            to={{
              pathname:'/detail/' + item.id,
              search:"?dataName=" + dataName
            }}
          >
            <h2>{item.id}.{item.title}</h2>
            <p>{item.des}</p>
          </Link>
        ) )
      }

    </div>
  )
};

export default Cell;