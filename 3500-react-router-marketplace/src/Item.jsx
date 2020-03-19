import React from 'react'; // 1
import { Link } from 'react-router-dom' // 1
import './App.css'; // 1

function Item({ imageLocation, description, cost, sellerId }) {  // 1

  return (<div className="card center "> {/* 2 */}
    <img height="100px" src={imageLocation} /> {/* 3 */}
    <div> {/* 3 */}
      <div>{description}</div> {/* 3 */}
      <div>{cost}</div> {/* 3 */}
      <Link to={"/seller/" + sellerId}> Link to seller </Link> {/* 4 */}
    </div>{/* 3 */}
  </div>) // 2

} // 1

export default Item; // 1
