import React, { useState } from "react" // 1
import produce from 'immer' // 1
import store from './store' // 1
function Login() { // 1
    const [state, setState] = useState({ // 1
        username: "", // 1
        password: "" // 1
    }) // 1
    const handleUsernameChange = event => { // 1
        console.log("new username", event.target.value) // 1
        setState(produce(state, st => { // 1
            st.username = event.target.value // 1
        })) // 1
    } // 1
    const handlePasswordChange = event => { // 1
        console.log("new password", event.target.value) // 1
        setState(produce(state, st => { // 1
            st.password = event.target.value // 1
        })) // 1
    } // 1
    const handleSubmit = async evt => { // 2
        evt.preventDefault() // 2
        console.log("login form submitted") // 2
        let data = new FormData() // 3
        data.append("username", state.username) // 3
        data.append("password", state.password) // 3
        let response = await fetch("/login", { /* 3 */
            method: "POST", // 3
            body: data, // 3
            credentials: "include" // 3
        }) // 3
        let responseBody = await response.text() // 4
        console.log("responseBody from login", responseBody) // 5
        let body = JSON.parse(responseBody) // 5
        console.log("parsed body", body) // 5
        if (!body.success) { // 6
            alert("login failed") // 6
            return // 6
        } // 6
        store.dispatch({ // 7
            type: "login-success" // 7
        }) // 7
    } // 2
    return ( // 1
        <form onSubmit={handleSubmit}> {/* 1 */}
            Username {/* 1 */}
            <input type="text" onChange={handleUsernameChange} /> {/* 1 */}
            Password {/* 1 */}
            <input type="text" onChange={handlePasswordChange} /> {/* 1 */}
            <input type="submit" /> {/* 1 */}
        </form> // 1
    ) // 1
} // 1


export default Login // 1
