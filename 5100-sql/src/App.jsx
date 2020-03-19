import React, { useState } from 'react' // 1
import Content from './Content.jsx' // 1
import produce from 'immer' // 1
function App() { // 1
    const [state, setState] = useState({ // 2
        usernameInput: "", // 2
        passwordInput: "", // 2
        username: null // 2 
    }) // 2

    const usernameChange = evt => { // 4
        setState(produce(state, st => { // 4
            st.usernameInput = evt.target.value // 4
        }))// 4

    } // 4
    const passwordChange = evt => { // 5
        setState(produce(state, st => { // 5
            st.passwordInput = evt.target.value // 5
        })) // 5
    } // 5
    const submitHandler = async evt => { // 6
        evt.preventDefault() // 6
        console.log("username", state.username) // 6
        console.log("password", state.passwordInput) // 6
        let name = state.usernameInput // 6
        let data = new FormData() // 7
        data.append("username", name) // 7
        data.append("password", state.passwordInput) // 7
        let response = await fetch('/login', { method: "POST", body: data }) // 8
        let body = await response.text() // 8
        console.log("/login response", body) // 8
        body = JSON.parse(body) // 8
        if (body.success) { // 9
            setState(produce(state, st => { // 9
                st.username = name // 9
            })) // 9
        } // 9
    } // 6

    if (state.username === null) { // 3
        return (<form onSubmit={submitHandler}> {/* 3 */}
            Username <input type="text" onChange={usernameChange} />  {/* 4 */}
            Password <input type="text" onChange={passwordChange} /> {/* 4 */}
            <input type="submit" value="login" /> {/* 3 */}
        </form>) // 3
    } // 3
    return (<Content />) // 3

} // 1

export default App // 1
