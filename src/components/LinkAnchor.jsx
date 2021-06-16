import React, { useEffect, useState } from 'react'
import '../styles/style.css'

function LinkAnchor({ activeIdx, idx, colorScheme, text, setScreen }) {
    const [hover, setHover] = useState(false)

    return (
        <div className='nav-button' style={{ backgroundColor: hover ? colorScheme.hover : null, padding: 0, margin: 0 }}>
            <div className='nav-button' style={{ backgroundColor: (activeIdx === idx) ? colorScheme.backgroundCard : null }}
                onClick={() => setScreen(idx)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <h4 style={{ color: (activeIdx === idx) ? colorScheme.primary : colorScheme.secondary }}>{text}</h4>
            </div>
        </div>
    );
}

export default LinkAnchor