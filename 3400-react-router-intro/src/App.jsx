import React, { Component } from 'react' // 1
import { BrowserRouter, Route, Link } from 'react-router-dom' // 1
let renderRoot = () => { // 3
    return (<div> {/* 3 */}
        Welcome to this page. Click here to view all the items: {/* 3 */}
        <Link to="/allItems">All items</Link> {/* 4 */}
    </div>) // 3
} // 3
let renderAllItems = () => { // 6
    return (<div> {/* 6 */}
        <div><Link to="/item/abc">A hat</Link></div> {/* 7 */}
        <div><Link to="/item/def">A boat</Link></div> {/* 7 */}
    </div>) // 6
} // 6
let renderItem = routerData => { // 10
    if (routerData.match.params.itemId === "abc") { // 11
        return (<div>A very nice hat. Only 4 remaining <img src="/hat.jpg" /></div>) // 11
    } // 11
    if (routerData.match.params.itemId === "def") { // 12
        return (<div>A boat. Only 4 remaining <img src="/boat.jpg" /></div>) // 12
    } // 12
    return (<div> Unknown item </div>) // 13
} // 10
class App extends Component { // 1
    render() { // 1
        return (<BrowserRouter><div> {/* 2 */}
            <Route exact={true} path='/' render={renderRoot} /> {/* 5 */}
            <Route exact={true} path='/allItems' render={renderAllItems} /> {/* 8 */}
            <Route exact={true} path='/item/:itemId' render={renderItem} /> {/* 9 */}
        </div></BrowserRouter>) // 2
    } // 1
} // 1
export default App // 1
