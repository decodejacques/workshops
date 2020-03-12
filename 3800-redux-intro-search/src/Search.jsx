import { connect } from 'react-redux' // 1
import React, { Component } from 'react' // 1
class UnconnectedSearch extends Component { // 2
    handleQuery = evt => { // 3
        this.props.dispatch({ type: 'query', q: evt.target.value }) // 3
    } // 3
    handleMinimumPrice = evt => { // 4
        let price = parseInt(evt.target.value) // 4
        this.props.dispatch({ type: 'minimum-price', price: price }) // 4
    } // 4
    handleMaximumPrice = evt => { // 5
        let price = parseInt(evt.target.value) // 5
        this.props.dispatch({ type: 'maximum-price', price: price }) // 5
    } // 3
    render = () => { // 3
        return ( // 3
            <div> {/* 3 */}
                <div> {/* 3 */}
                    Search query {/* 3 */}
                    <input type="text" onChange={this.handleQuery} value={this.props.query} /> {/* 3 */}
                </div> {/* 3 */}
                <div> {/* 4 */}
                    Minimum price {/* 4 */}
                    <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} /> {/* 4 */}
                </div> {/* 4 */}
                <div> {/* 5 */}
                    Maximum price {/* 5 */}
                    <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} /> {/* 5 */}
                </div> {/* 5 */}
            </div>) // 3
    } // 3
} // 2
let mapStateToProps = st => { // 2
    return { // 2
        query: st.searchQuery, // 2
        minPrice: st.min, // 2
        maxPrice: st.max // 2
    } // 2
} // 2
let Search = connect(mapStateToProps)(UnconnectedSearch) // 2
export default Search // 2
