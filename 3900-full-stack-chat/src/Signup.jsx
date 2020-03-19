import React, { useState } from "react" // 1
import produce from 'immer' // 1
function Signup() { // 1
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
        }))  // 1
    } // 1

    const handleSubmit = evt => { // 2
        evt.preventDefault() // 2
        console.log("signup form submitted") // 2
        let data = new FormData() // 2
        data.append("username", state.username) // 2
        data.append("password", state.password) // 2
        fetch("/signup", /* 2 */
            { method: "POST", body: data }) // 2
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
export default Signup // 1
