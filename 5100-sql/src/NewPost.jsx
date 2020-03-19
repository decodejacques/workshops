import React, { useState } from 'react' // 1
import produce from 'immer' // 1
function NewPost() { // 1
    const [state, setState] = useState({ // 2
        file: "", // 2
        description: "" // 2
    }) // 2

    const descChangeHandler = e => { // 3
        setState(produce(state, st => { // 3
            st.description = e.target.value // 3
        })) // 3
    } // 3
    const fileChangeHandler = e => { // 4
        setState(produce(state, st => { // 4
            st.file = e.target.files[0] // 4
        })) // 4
    } // 4
    const submitHandler = evt => { // 5
        evt.preventDefault() // 5
        let data = new FormData() // 5
        data.append("img", state.file) // 5
        data.append("description", state.description) // 5
        fetch('/new-post', { method: "POST", body: data }) // 5
    } // 5

    return (<form onSubmit={submitHandler}> {/* 6 */}
        <input type="file" onChange={fileChangeHandler} /> {/* 6 */}
        <input type="text" value={state.description} onChange={descChangeHandler} /> {/* 6 */}
        <input type="submit" value="create new" /> {/* 6 */}
    </form>) // 6

} // 1

export default NewPost // 1

