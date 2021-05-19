import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

function DarkSwitch({ currentTheme, switchTheme, colorScheme, language }) {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="theme-switch">
            <a
                className="toggle-btn"
                style={{ borderColor: colorScheme.secondary }}
                onClick={() => {
                    if (currentTheme === "dark") {
                        setToggle(true);
                        switchTheme("light")
                    } else if (currentTheme == "light") {
                        setToggle(false);
                        switchTheme("dark")
                    }
                }}
                href="#"
            >
                <div
                    className="ball"
                    style={{
                        backgroundColor: colorScheme.secondary,
                        transform: toggle ? "translateX(-63%)" : "translateX(55%)"
                    }}
                />
            </a>
            <h6 style={{ color: colorScheme.secondary }}>
                {currentTheme === "dark" ? (language === "EN" ? "dark mode" : "ciemny motyw") : (language === "EN" ? "light mode" : "jasny motyw")}
            </h6>
        </div>
    );
}

export default DarkSwitch;