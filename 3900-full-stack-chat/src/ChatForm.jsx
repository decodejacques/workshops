import React, { Component } from "react" // 1

class ChatForm extends Component { // 1
    constructor(props) { // 1
        super(props) // 1
        this.state = { message: "" } // 1
    } // 1
    handleMessageChange = event => { // 1
        console.log("new message", event.target.value) // 1
        this.setState({ message: event.target.value }) // 1
    } // 1
    handleSubmit = event => { // 2
        event.preventDefault() // 2
        console.log("form submitted") // 2
        let data = new FormData() // 2
        data.append("msg", this.state.message) // 2
        fetch("/newmessage", { /* 2 */
            method: "POST", // 2
            body: data, // 2
            credentials: "include" // 2
        }) // 2
    }// 2
    render = () => {  // 1
        return (  // 1
            <div>  {/* 1 */}
                <form onSubmit={this.handleSubmit}>  {/* 1 */}
                    <input onChange={this.handleMessageChange} type="text" /> {/* 1 */}
                    <input type="submit" /> {/* 1 */}
                </form> {/* 1 */}
            </div>) // 1
    } // 1
} // 1

export default ChatForm // 1
