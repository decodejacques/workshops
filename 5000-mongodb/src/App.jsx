import React, { Component } from 'react' // 1
import Content from './Content.jsx' // 1
class App extends Component { // 1
    constructor() { // 2
        super() // 2
        this.state = { // 2
            usernameInput: "", // 2
            passwordInput: "", // 2
            username: undefined // 2 
        } // 2
    } // 2
    usernameChange = evt => { // 4
        this.setState({ usernameInput: evt.target.value }) // 4
    } // 4
    passwordChange = evt => { // 5
        this.setState({ passwordInput: evt.target.value }) // 5
    } // 5
    submitHandler = async evt => { // 6
        evt.preventDefault() // 6
        console.log("username", this.state.username) // 6
        console.log("password", this.state.passwordInput) // 6
        let name = this.state.usernameInput // 6
        let data = new FormData() // 7
        data.append("username", name) // 7
        data.append("password", this.state.passwordInput) // 7
        let response = await fetch('/login', { method: "POST", body: data }) // 8
        let body = await response.text() // 8
        console.log("/login response", body) // 8
        body = JSON.parse(body) // 8
        if (body.success) { // 9
            this.setState({ username: name }) // 9
        } // 9
    } // 6
    render = () => { // 3
        if (this.state.username === undefined) { // 3
            return (<form onSubmit={this.submitHandler}> {/* 3 */}
                Username <input type="text" onChange={this.usernameChange} />  {/* 4 */}
                Password <input type="text" onChange={this.passwordChange} /> {/* 4 */}
                <input type="submit" value="login" /> {/* 3 */}
            </form>) // 3
        } // 3
        return (<Content />) // 3
    } // 3
} // 1

export default App // 1
