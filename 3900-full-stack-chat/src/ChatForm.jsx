import React, { useState } from "react" // 1

function ChatForm() { // 1
    const [message, setMessage] = useState("") // 1
    const handleMessageChange = event => { // 1
        console.log("new message", event.target.value) // 1
        setMessage(event.target.value) // 1
    } // 1
    const handleSubmit = event => { // 2
        event.preventDefault() // 2
        console.log("form submitted") // 2
        let data = new FormData() // 2
        data.append("msg", message) // 2
        fetch("/newmessage", { /* 2 */
            method: "POST", // 2
            body: data, // 2
            credentials: "include" // 2
        }) // 2
    }// 2
    return (  // 1
        <div>  {/* 1 */}
            <form onSubmit={handleSubmit}>  {/* 1 */}
                <input onChange={handleMessageChange} type="text" /> {/* 1 */}
                <input type="submit" /> {/* 1 */}
            </form> {/* 1 */}
        </div>) // 1
} // 1

export default ChatForm // 1
