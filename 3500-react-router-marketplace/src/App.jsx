import './App.css'; /* 1 */
import React, { Component } from 'react'; /* 1 */
import { Route, BrowserRouter } from 'react-router-dom' /* 1 */
import Seller from './Seller.jsx' /* 1 */
import Item from './Item.jsx' /* 1 */
import { initialItems, initialSellers } from './Data.js' /* 1 */

let renderAllItems = () => {  /* 4 */
  return <div> {/* 4 */}
    {initialItems.map(item => /* 5 */
      (<Item /* 5 */
        cost={item.price} /* 6 */
        sellerId={item.sellerId} /* 6 */
        imageLocation={item.image} /* 6 */
        description={item.description}  /* 6 */
      />))} {/* 5 */}
  </div> /* 4 */
} /* 4 */

let renderSeller = routerData => { /* 8 */
  let sellerId = routerData.match.params.sid /* 9 */
  let candidates = /* 10 */
    initialSellers.filter(seller => { return seller.id === sellerId }) /* 10 */
  return (<Seller seller={candidates[0]} />) /* 11 */
}  /* 8 */

class App extends Component { /* 1 */
  render() { /* 2 */
    return ( /* 2 */
      <BrowserRouter> {/* 2 */}
        <div> {/* 2 */}
          <Route exact={true} path='/' render={renderAllItems} /> {/* 3 */}
          <Route exact={true} path='/seller/:sid' render={renderSeller} /> {/* 7 */}
        </div> {/* 2 */}
      </BrowserRouter> /* 2 */
    ); /* 2 */
  } /* 2 */
} /* 1 */

export default App; /* 1 */
