import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1

class UnconnectedChatMessages extends Component { // 1
    componentDidMount = () => {  // 2
        let updateMessages = async () => { // 3
            let response = await fetch("/messages") /* 3 */
            let responseBody = await response.text() // 4
            console.log("response from messages", responseBody) // 5
            let parsed = JSON.parse(responseBody) // 6
            console.log("parsed", parsed) // 6
            this.props.dispatch({ // 7
                type: "set-messages", // 7
                messages: parsed // 7
            }) // 7

        } // 3
        setInterval(updateMessages, 500) // 8
    } // 2
    render = () => { // 9
        let msgToElement = e => <li> {e.username}:{e.message} </li> // 10
        return ( // 9
            <div> {/* 9 */}
                <ul>{this.props.messages.map(msgToElement)}</ul> {/* 10 */}
            </div>) // 9
    } // 9
} // 1
let mapStateToProps = state => { // 1
    return { // 1
        messages: state.msgs // 1
    } // 1
} // 1
let Chat = connect(mapStateToProps)(UnconnectedChatMessages) // 1
export default Chat // 1
