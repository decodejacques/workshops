import React from 'react' // 1
function SoundWidget({ url }) { // 1
    return (<audio controls> {/* 1 */}
        <source src={url} />  {/* 2 */}
    </audio>) // 1
} // 1
export default SoundWidget // 1

