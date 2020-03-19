import React from 'react'; /* 1 */
import './App.css'; /* 1 */

function Seller({ seller }) { /* 1 */
  return ( /* 2 */
    <div className="card center"> {/* 2 */}
      <div>{seller.name}</div> {/* 3 */}
      <div>{seller.rating}</div> {/* 3 */}
    </div> /* 2 */
  ); /* 2 */
} /* 1 */

export default Seller; /* 1 */
