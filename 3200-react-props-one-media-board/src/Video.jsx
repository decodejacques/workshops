import React from 'react' // 1
function Video({ videoId }) { // 2
    return ( // 3
        <div> {/* 3 */}
            <iframe src={"https://player.vimeo.com/video/" + videoId} /* 3 */
                width="640" height="360" frameBorder="0" /> {/* 3 */}
        </div>) /* 3 */
} // 2
export default Video // 4

