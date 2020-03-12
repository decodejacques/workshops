import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1
class UnconnectedLogin extends Component { // 1
    constructor(props) { // 1
        super(props) // 1
        this.state = { // 1
            username: "", // 1
            password: "" // 1
        } // 1
    } // 1
    handleUsernameChange = event => { // 1
        console.log("new username", event.target.value) // 1
        this.setState({ username: event.target.value }) // 1
    } // 1
    handlePasswordChange = event => { // 1
        console.log("new password", event.target.value) // 1
        this.setState({ password: event.target.value }) // 1
    } // 1
    handleSubmit = async evt => { // 2
        evt.preventDefault() // 2
        console.log("login form submitted") // 2
        let data = new FormData() // 3
        data.append("username", this.state.username) // 3
        data.append("password", this.state.password) // 3
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
        this.props.dispatch({ // 7
            type: "login-success" // 7
        }) // 7
    } // 2
    render = () => { // 1
        return ( // 1
            <form onSubmit={this.handleSubmit}> {/* 1 */}
                Username {/* 1 */}
                <input type="text" onChange={this.handleUsernameChange} /> {/* 1 */}
                Password {/* 1 */}
                <input type="text" onChange={this.handlePasswordChange} /> {/* 1 */}
                <input type="submit" /> {/* 1 */}
            </form> // 1
        ) // 1
    } // 1
} // 1

let Login = connect()(UnconnectedLogin) // 1
export default Login // 1
