import React, { useEffect } from "react" // 1
import { useSelector } from 'react-redux' // 1
import store from './store' // 1

function ChatMessages() { // 1
    const messages = useSelector(st => st.msgs) // 10
    useEffect(() => {  // 2
        let updateMessages = async () => { // 3
            let response = await fetch("/messages") /* 3 */
            let responseBody = await response.text() // 4
            console.log("response from messages", responseBody) // 5
            let parsed = JSON.parse(responseBody) // 6
            console.log("parsed", parsed) // 6
            store.dispatch({ // 7
                type: "set-messages", // 7
                messages: parsed // 7
            }) // 7

        } // 3
        setInterval(updateMessages, 500) // 8
    }, []) // 2

    let msgToElement = e => <li> {e.username}:{e.message} </li> // 10
    return ( // 9
        <div> {/* 9 */}
            <ul>{messages.map(msgToElement)}</ul> {/* 10 */}
        </div>) // 9

} // 1
export default ChatMessages // 1
