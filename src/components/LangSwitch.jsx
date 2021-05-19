import React, { useEffect, useState } from 'react'
import LangAnchor from './LangAnchor.jsx'
import '../styles/style.css'

function LangSwitch({ currentLanguage, switchLanguage, colorScheme }) {
    return (
        <div className="lang-pick">
            <LangAnchor text="EN" switchLanguage={switchLanguage} currentLanguage={currentLanguage} colorScheme={colorScheme} />
            <LangAnchor text="PL" switchLanguage={switchLanguage} currentLanguage={currentLanguage} colorScheme={colorScheme} />
        </div>
    );
}

export default LangSwitch;