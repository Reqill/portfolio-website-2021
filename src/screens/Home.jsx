import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import Image from "../media/home.svg"
import { ArrowRight } from 'react-feather';

const WorkBtn = ({ colorScheme, colorTheme, language }) => {
    const [hover, setHover] = useState(false)
    return (
        <div
            className="seemywork-btn"
            style={{
                borderColor: colorScheme.primary,
                backgroundColor: colorScheme.primary,
                boxShadow: hover ?
                    ((colorTheme === "dark") ?
                        `0px 5px 10px -3px rgba(255,255,255,0.25)` :
                        `0px 5px 10px -3px rgba(0,0,0,0.2)`) :
                    null
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* <svg height="0" width="0" style={{ position: "absolute", top: "-2px", left: "-2px", right: "-2px", bottom: "-2px" }}>
                <defs>
                    <clipPath id="clipPathSvg2">
                        <rect x="-2" width="228" height="54" rx="25" />
                    </clipPath>
                </defs>
            </svg>
            <div
                className="slider-inset-2"
                style={{
                    backgroundColor: colorScheme.primary,
                    width: hover ? "0%" : "100%"
                }} /> */}
            <p style={{ color: colorScheme.backgroundPage }}>{language === "EN" ? "see my work" : "moje prace"}</p>
            <ArrowRight color={colorScheme.backgroundPage} size={26} style={{ transition: "all 400ms ease-in-out" }} />
        </div>
    );
}

const ContactBtn = ({ colorScheme, language }) => {
    const [hover, setHover] = useState(false)
    return (
        <div
            className="contactme-btn"
            style={{
                borderColor: colorScheme.secondary,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <svg height="0" width="0" style={{ position: "absolute", top: "0", left: "0" }}>
                <defs>
                    <clipPath id="clipPathSvg">
                        <rect width={language === "EN" ? "190" : "150"} height="54" rx="25" />
                    </clipPath>
                </defs>
            </svg>
            <div
                className="slider-inset"
                style={{
                    backgroundColor: colorScheme.secondary,
                    width: hover ? "102%" : "0%"
                }} />
            <p style={{
                color: hover ?
                    colorScheme.backgroundPage :
                    colorScheme.secondary
            }}>{language === "EN" ? "contact me" : "kontakt"}</p>
        </div>
    );
}

function Home({ colorScheme, colorTheme, language }) {
    return (
        <div className="page">
            <div className="page-container">
                <div className="home-left">
                    <div className="home-content">
                        <h1 style={{ color: colorScheme.primary }}>{language === "EN" ? "Hi! I'm" : "Hej! Jestem"}</h1>
                        <h4 id="st" style={{ color: colorScheme.secondary, opacity: (colorTheme === "dark") ? .8 : 1 }}>{language === "EN" ? "innovative" : "innowacyjnym"}</h4>
                        <h4 id="nd" style={{ color: colorScheme.secondary, opacity: (colorTheme === "dark") ? .8 : 1 }}>{language === "EN" ? "creative" : "kreatywnym"}</h4>
                        <h4 id="rd" style={{ color: colorScheme.secondary, opacity: (colorTheme === "dark") ? .8 : 1 }}>{language === "EN" ? "motivated" : "zmotywowanym"}</h4>
                        <div className="jobs">
                            <h3 style={{ color: colorScheme.primary }}>{language === "EN" ? "front-end developer" : "front-end developerem"}</h3>
                            <h3 style={{ color: colorScheme.primary }}>{language === "EN" ? "and UI/UX designer" : "i UI/UX designerem"}</h3>
                        </div>
                        <div className="CTA-container">
                            <Link to="/portfolio">
                                <WorkBtn colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                            </Link>
                            <Link to="/contact">
                                <ContactBtn colorScheme={colorScheme} language={language} />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="home-right">
                    <div className="svg-home-container">
                        <img src={Image} style={{ opacity: (colorTheme === "dark") ? .9 : 1 }} />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Home;