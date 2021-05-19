import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

const showcaseList = [
    {
        header: "Portfolio wesite",
        description: "design and execution",
        githubURL: "none",
        normalURL: "#",
        downloadURL: "none",
        type: "desktop",
        technologies: [
            "ReactJS",
            "CSS3",
            "HTML5",
            "npm",
            "Sass",
            "responsive",
            "git",
            "AdobeXD",
            "Illustrator"
        ],
        photos: [

        ],
    },
    {
        header: "Tchnienie app",
        description: "design and execution",
        githubURL: "#",
        normalURL: "#",
        downloadURL: "#",
        type: "mobile",
        technologies: [
            "ReactNative",
            "Expo",
            "npm",
            "git",
            "TypeScript",
            "AdobeXD",
            "Illustrator"
        ],
        photos: [

        ],
    },
    {
        header: "SUILO website",
        description: "design and execution",
        githubURL: "none",
        normalURL: "#",
        downloadURL: "none",
        type: "desktop",
        technologies: [

        ],
        photos: [

        ],
    },
    {
        header: "PlanIO app",
        description: "design and execution",
        githubURL: "#",
        normalURL: "#",
        downloadURL: "#",
        type: "mobile",
        technologies: [

        ],
        photos: [

        ],
    }
]





const ShowcaseCard = ({ colorTheme, language, colorScheme, info, active }) => {
    const [hover, setHover] = useState(false);

    // const {
    //     header,
    //     description,
    //     githubURL,
    //     normalURL,
    //     downloadURL,
    //     technologies,
    //     photoOne,
    //     photoTwo,
    //     photoThree,
    //     noPhotos,
    //     type,
    // } = info;

    return (
        <div className="showcase" style={{ backgroundColor: colorScheme.backgroundCard }} />
    );
}



function Work({ setScreen, colorTheme, colorScheme, language }) {
    useEffect(() => {
        setScreen(1)
    }, [])
    return (
        <div className="portfolio-page">

            <div style={{ paddingBottom: "50px" }}>
                <section className="one-year">
                    <div className="year-indicator">
                        <div className="dot" style={{ backgroundColor: colorScheme.primary }} />
                        <p className="year-text" style={{ color: colorScheme.primary }}>2021</p>
                    </div>
                    <div className="portfolio-row">
                        <div className="bar-vertical" style={{ backgroundColor: colorScheme.primary }} />
                        <div className="right-content">
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                        </div>
                    </div>
                </section>
                <section className="one-year">
                    <div className="year-indicator">
                        <div className="dot" style={{ backgroundColor: colorScheme.secondary }} />
                        <p className="year-text" style={{ color: colorScheme.secondary }}>2020</p>
                    </div>
                    <div className="portfolio-row">
                        <div className="bar-vertical" style={{ backgroundColor: colorScheme.secondary }} />
                        <div className="right-content">
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                        </div>
                    </div>
                </section>
                <section className="one-year">
                    <div className="year-indicator">
                        <div className="dot" style={{ backgroundColor: colorScheme.secondary }} />
                        <p className="year-text" style={{ color: colorScheme.secondary }}>2019</p>
                    </div>
                    <div className="portfolio-row">
                        <div className="bar-vertical" style={{ backgroundColor: colorScheme.secondary }} />
                        <div className="right-content">
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
                        </div>
                    </div>
                </section>
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
            </div>

        </div>
    );
}
export default Work;