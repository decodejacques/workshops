import React, { Component } from 'react'; // 1
import { Link } from 'react-router-dom' // 1
import './App.css'; // 1

class Item extends Component {  // 1
  render() { // 2
    return (<div className="card center "> {/* 2 */}
      <img height="100px" src={this.props.imageLocation} /> {/* 3 */}
      <div> {/* 3 */}
        <div>{this.props.description}</div> {/* 3 */}
        <div>{this.props.cost}</div> {/* 3 */}
        <Link to={"/seller/" + this.props.sellerId}> Link to seller </Link> {/* 4 */}
      </div>{/* 3 */}
    </div>) // 2
  } // 2
} // 1

export default Item; // 1
