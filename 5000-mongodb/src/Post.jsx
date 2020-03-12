import React, { Component } from 'react' // 1

class Post extends Component { // 1
    constructor(props) { // 2
        super(props) // 2
        this.state = { // 2
            description: this.props.contents.description // 2
        } // 2
    } // 2
    changeHandler = e => { // 3
        this.setState({ description: e.target.value }) // 3
    } // 3
    submitHandler = evt => { // 4
        evt.preventDefault() // 4
        let data = new FormData() // 4
        data.append("description", this.state.description) // 4
        data.append("id", this.props.contents._id) // 4
        fetch('/update', { method: "POST", body: data }) // 4
    } // 4
    render = () => { // 5
        return (<form onSubmit={this.submitHandler}> {/* 5 */}
            <input type="text" value={this.state.description} onChange={this.changeHandler} /> {/* 5 */}
            <img src={this.props.contents.frontendPath} /> {/* 5 */}
            <input type="submit" value="update" /> {/* 5 */}
        </form>) // 5
    } // 5
} // 1

export default Post // 1

