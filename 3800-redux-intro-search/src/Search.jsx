import React from 'react' // 1
import { useSelector } from 'react-redux' // 1
import store from './store' // 1
function Search() { // 2
    const query = useSelector(st => st.searchQuery) // 2
    const minPrice = useSelector(st => st.min) // 2
    const maxPrice = useSelector(st => st.max) // 2
    const handleQuery = evt => { // 3
        store.dispatch({ type: 'query', q: evt.target.value }) // 3
    } // 3
    const handleMinimumPrice = evt => { // 4
        let price = parseInt(evt.target.value) // 4
        store.dispatch({ type: 'minimum-price', price: price }) // 4
    } // 4
    const handleMaximumPrice = evt => { // 5
        let price = parseInt(evt.target.value) // 5
        store.dispatch({ type: 'maximum-price', price: price }) // 5
    } // 3
    return ( // 3
        <div> {/* 3 */}
            <div> {/* 3 */}
                Search query {/* 3 */}
                <input type="text" onChange={handleQuery} value={query} /> {/* 3 */}
            </div> {/* 3 */}
            <div> {/* 4 */}
                Minimum price {/* 4 */}
                <input type="text" onChange={handleMinimumPrice} value={minPrice} /> {/* 4 */}
            </div> {/* 4 */}
            <div> {/* 5 */}
                Maximum price {/* 5 */}
                <input type="text" onChange={handleMaximumPrice} value={maxPrice} /> {/* 5 */}
            </div> {/* 5 */}
        </div>) // 3

} // 2
export default Search // 2
