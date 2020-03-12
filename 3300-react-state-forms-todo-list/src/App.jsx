import React, { Component } from 'react' // 1
class App extends Component { // 1
    constructor() { // 2
        super() // 2
        console.log("Instantiating") // 2
        this.state = { // 3
            listName: undefined, // 4
            allTodos: [], // 4
            userInput: "" // 4
        } // 3
    } // 2
    componentDidMount() { // 5
        console.log("After the first render") // 5
        let nameEntered = window.prompt("What is the name of the list?") // 6
        console.log("This is what the user entered", nameEntered) // 6
        this.setState({ listName: nameEntered }) // 7
    } // 5
    onChangeHandler = event => { // 10
        console.log("New string in input box ", event.target.value) // 11
        this.setState({ userInput: event.target.value }) // 12
    } // 10
    submitHandler = event => { // 13
        console.log("Form submitted") // 13
        event.preventDefault() // 14
        this.setState({ // 15
            userInput: "", // 15
            allTodos: this.state.allTodos.concat(this.state.userInput) // 15
        }) // 15
    } // 13
    render() { // 8
        console.log("Rendering with state", this.state) // 8
        if (!this.state.listName) { // 9
            return (<div> loading ... </div>) // 9
        } // 9
        return (<div> {/*16*/}
            <h1>{this.state.listName}</h1> {/* 17 */}
            <ul> {/* 18 */}
                {this.state.allTodos.map(x => (<li>{x}</li>))} {/* 18 */}
            </ul> {/* 18 */}
            <form onSubmit={this.submitHandler}> {/* 19 */}
                <input type="text" /* 20 */
                    onChange={this.onChangeHandler} /* 20 */
                    value={this.state.userInput} /> {/* 20 */}
                <input type="submit"></input> {/* 19 */}
            </form> {/* 19 */}
        </div>) // 16
    } // 8
} // 1
export default App // 1
