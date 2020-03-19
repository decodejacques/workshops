import React, { useState, useEffect } from 'react' // 1
import produce from 'immer' // 2
function App() { // 1
    const [state, setState] = useState({ // 3
        listName: undefined, // 4
        allTodos: [], // 4
        userInput: "" // 4
    }) // 3
    useEffect(() => { // 5
        console.log("After the first render") // 5
        let nameEntered = window.prompt("What is the name of the list?") // 6
        console.log("This is what the user entered", nameEntered) // 6
        setState(produce(state, st => { // 7
            st.listName = nameEntered // 7
        })) // 7
    }, []) // 5
    const onChangeHandler = event => { // 10
        console.log("New string in input box ", event.target.value) // 11
        setState(produce(state, st => { // 12
            st.userInput = event.target.value // 12
        })) // 12
    } // 10
    const submitHandler = event => { // 13
        console.log("Form submitted") // 13
        event.preventDefault() // 14
        setState(produce(state, st => { // 15
            st.userInput = "" // 15
            st.allTodos.push(state.userInput) // 15
        })) // 15
    } // 13
    console.log("Rendering with state", state) // 8
    if (!state.listName) { // 9
        return (<div> loading ... </div>) // 9
    } // 9
    return (<div> {/*16*/}
        <h1>{state.listName}</h1> {/* 17 */}
        <ul> {/* 18 */}
            {state.allTodos.map(x => (<li>{x}</li>))} {/* 18 */}
        </ul> {/* 18 */}
        <form onSubmit={submitHandler}> {/* 19 */}
            <input /* 20 */
                type="text" /* 20 */
                onChange={onChangeHandler} /* 20 */
                value={state.userInput} /> {/* 20 */}
            <input type="submit"></input> {/* 19 */}
        </form> {/* 19 */}
    </div>) // 16
} // 1
export default App // 1
