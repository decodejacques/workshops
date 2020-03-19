import './main.css' // 1
import React from 'react'  // 1
import { videos } from './Data.jsx' // 2
import Video from './Video.jsx' // 2

function App() { // 3
    return (<div>  {/* 4 */}
        {videos.map( // 5
            vd => { // 5
                return (<Video /* 5 */
                    header={vd.name} /* 5 */
                    videoId={vd.id} /* 5 */
                    footer={vd.caption} />) /* 5 */
            })} {/* 5 */}
    </div>) // 5
} // 3
export default App // 6
