import React, { useEffect, useState } from 'react'
import '../styles/style.css'

function LangAnchor({ currentLanguage, switchLanguage, colorScheme, text }) {
    const [hover, setHover] = useState(false)

    return (
        <a
            onClick={() => switchLanguage(text)}
            className="lang-btn"
            style={{ backgroundColor: hover ? colorScheme.hover : null, padding: 0, margin: 0 }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href="#"
        >
            <div className="lang-btn" style={{ backgroundColor: (currentLanguage === text) ? colorScheme.backgroundCard : null }}>
                <h5 style={{ color: (currentLanguage === text) ? colorScheme.primary : colorScheme.secondary }}>
                    {text}
                </h5>
            </div>
        </a>

    );
}

export default LangAnchor