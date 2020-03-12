import React, { Component } from 'react' // 1
import Post from './Post.jsx' // 1
import NewPost from './NewPost.jsx' // 1

class Content extends Component { // 1
    constructor(props) { // 2
        super(props) // 2
        this.state = { // 2
            posts: [] // 2
        } // 2
    } // 2
    reload = async () => { // 3
        let response = await fetch('/all-posts') // 3
        let body = await response.text() // 3
        console.log("/all-posts response", body) // 3
        body = JSON.parse(body) // 3
        this.setState({ posts: body }) // 3
    } // 3
    render = () => { // 4
        return (<div> {/* 4 */}
            <button onClick={this.reload}> load </button> {/* 4 */}
            <div>{this.state.posts.map(p => <Post key={p._id} contents={p} />)}</div> {/* 4 */}
            <NewPost /> {/* 4 */}
        </div>) // 4
    } // 4
} // 1

export default Content // 1
