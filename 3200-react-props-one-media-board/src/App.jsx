import './main.css' // 1
import React, { Component } from 'react'  // 1
import { videos } from './Data.jsx' // 2
import Video from './Video.jsx' // 2

class App extends Component { // 3
    render() { // 4
        return (<div>  {/* 5 */}
            {videos.map( // 6
                vd => { // 6
                    return (<Video /* 6 */
                        header={vd.name} /* 6 */
                        videoId={vd.id} /* 6 */
                        footer={vd.caption} />) /* 6 */
                })} {/* 6 */}
        </div>) // 5
    } // 4
} // 3
export default App // 7
