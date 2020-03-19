import React from 'react' // 1
import { useSelector } from 'react-redux' // 1
import data from './data.js' // 1
function SearchResults() { // 2
    const query = useSelector(st => st.searchQuery) // 2
    let results = data.filter(item => { // 3
        return item.name.includes(query) // 3
    }) // 3
    return (<div> {/* 4 */}
        {results.map(r => { // 4
            return (<div>{r.name}</div>) // 4
        })} {/* 4 */}
    </div>) // 4
} // 2
export default SearchResults  // 2
