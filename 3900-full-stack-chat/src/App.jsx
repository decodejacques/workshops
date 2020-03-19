import React from "react" // 1
import { useSelector } from 'react-redux' // 1
import Login from './Login.jsx' // 1
import Signup from './Signup.jsx' // 1
import ChatMessages from './ChatMessages.jsx' // 1
import ChatForm from './ChatForm.jsx' // 1
function App() { // 2
    const lgin = useSelector(st => st.loggedIn) // 2
    if (lgin) { // 3
        return (<div> {/* 3 */}
            <ChatMessages /> {/* 3 */}
            <ChatForm />{/* 3 */}
        </div>) //  3
    } // 3
    return ( // 3
        <div> {/* 3 */}
            <h1>Signup</h1>  {/* 3 */}
            <Signup /> {/* 3 */}
            <h1>Login</h1> {/* 3 */}
            <Login /> {/* 3 */}
        </div>)  // 3
} // 2
export default App // 2
