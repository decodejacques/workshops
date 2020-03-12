import React, { Component } from 'react' // 1
class Video extends Component { // 2
    render() { // 3
        return ( // 4
            <div> {/* 4 */}
                <iframe src={"https://player.vimeo.com/video/" + this.props.videoId} /* 4 */
                    width="640" height="360" frameBorder="0" /> {/* 4 */}
            </div>) /* 4 */
    } // 3
} // 2
export default Video // 5

