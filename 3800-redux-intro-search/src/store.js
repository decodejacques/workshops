import { createStore } from "redux" // 1
let reducer = (state, action) => { // 2
    if (action.type === "query") { // 3
        return { ...state, searchQuery: action.q } // 3
    } // 3
    if (action.type === "minimum-price") { // 4
        return { ...state, min: action.price } // 4
    } // 4
    if (action.type === "maximum-price") { // 4
        return { ...state, max: action.price } // 4
    } // 4
    return state  // 5
} // 2

const store = createStore( // 6
    reducer, // 6
    { searchQuery: "", min: 0, max: 100000 }, // 6
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 7
) // 6

export default store // 6
