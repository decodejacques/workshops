import { connect } from 'react-redux' // 1
import React, { Component } from 'react' // 1
import data from './data.js' // 1
class UnconnectedSearchResults extends Component { // 2
    render = () => { // 3
        let results = data.filter(item => { // 4
            return item.name.includes(this.props.query) // 4
        }) // 4
        return (<div> {/* 5 */}
            {results.map(r => { // 5
                return (<div>{r.name}</div>) // 5
            })} {/* 5 */}
        </div>) // 5
    } // 3
} // 2
let mapStateToProps = st => { // 2
    return { // 2
        query: st.searchQuery, // 2
    } // 2
} // 2
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults) // 2
export default SearchResults  // 2
