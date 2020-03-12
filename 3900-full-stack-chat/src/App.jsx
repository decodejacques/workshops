import React, { Component } from "react" // 1
import { connect } from "react-redux" // 1
import Login from './Login.jsx' // 1
import Signup from './Signup.jsx' // 1
import ChatMessages from './ChatMessages.jsx' // 1
import ChatForm from './ChatForm.jsx' // 1

class UnconnectedApp extends Component { // 2
    render = () => { // 2
        if (this.props.lgin) { // 3
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
} // 2
let mapStateToProps = state => { // 2
    return { lgin: state.loggedIn } // 2
} // 2
let App = connect(mapStateToProps)(UnconnectedApp) // 2
export default App // 2
