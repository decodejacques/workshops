import { createStore } from "redux" // 1
let reducer = (state, action) => { // 2
    if (action.type === "login-success") { // 3
        return { ...state, loggedIn: true } // 3
    } // 3
    if (action.type === "set-messages") { // 4
        return { ...state, msgs: action.messages } // 4
    } // 4
    return state  // 5
} // 2

const store = createStore( // 6
    reducer, // 6
    { msgs: [], loggedIn: false }, // 6
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 7
) // 6

export default store // 6
