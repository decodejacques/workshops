import React, { Component } from 'react'; /* 1 */
import './App.css'; /* 1 */

class Seller extends Component { /* 1 */
  render() { /* 2 */
    return ( /* 3 */
      <div className="card center"> {/* 3 */}
        <div>{this.props.seller.name}</div> {/* 4 */}
        <div>{this.props.seller.rating}</div> {/* 4 */}
      </div> /* 3 */
    ); /* 3 */
  } /* 2 */
} /* 1 */

export default Seller; /* 1 */
