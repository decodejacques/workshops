import React, { useState } from 'react' // 1

function Post({ contents }) { // 1
    const [state, setState] = useState({ // 2
        description: contents.descr // 2
    }) // 2
    const changeHandler = e => { // 3
        setState(produce(state, st => { // 3
            st.description = e.target.value // 3
        })) // 3

    } // 3
    const submitHandler = evt => { // 4
        evt.preventDefault() // 4
        let data = new FormData() // 4
        data.append("description", state.description) // 4
        data.append("id", contents.post_id) // 4
        fetch('/update', { method: "POST", body: data }) // 4
    } // 4
    return (<form onSubmit={submitHandler}> {/* 5 */}
        <input type="text" value={state.description} onChange={changeHandler} /> {/* 5 */}
        <img src={contents.frontend_path} /> {/* 5 */}
        <input type="submit" value="update" /> {/* 5 */}
    </form>) // 5

} // 1

export default Post // 1

