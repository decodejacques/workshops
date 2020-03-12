import React, { Component } from 'react' // 1
class SoundWidget extends Component { // 1
    render() { // 1
        return (<audio controls> {/* 1 */}
            <source src={this.props.url} />  {/* 2 */}
        </audio>) // 1
    } // 1
} // 1
export default SoundWidget // 1

