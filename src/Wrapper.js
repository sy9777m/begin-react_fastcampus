import React from 'react'

function Wrapper({childeren}) {
    const style = {
        border: '2px solid black',
        padding: 16
    }

    return <div style={style}>{childeren}</div>
}

export default Wrapper