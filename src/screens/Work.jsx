import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import { GitHub } from 'react-feather';
import { Link } from 'react-feather';
import { Download } from 'react-feather';

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
            "ReactJS",
            "CSS3",
            "HTML5",
            "Sass",
            "npm",
            "responsive",
            "AdobeXD",
        ],
        photos: [

        ],
    },
    {
        header: "PlanIO app",
        description: "design and execution",
        githubURL: "none",
        normalURL: "#",
        downloadURL: "#",
        type: "mobile",
        technologies: [
            "ReactNative",
            "Expo",
            "npm",
            "AdobeXD",
        ],
        photos: [

        ],
    }
]



const ShowcaseCard = ({ colorTheme, language, colorScheme, info, active }) => {
    const [hover, setHover] = useState(false);

    const {
        header,
        description,
        githubURL,
        normalURL,
        downloadURL,
        technologies,
        // photos,
        type,
    } = info;

    const generateTech = () => {
        return technologies.map((el, i) => <div style={{ padding: "2px" }}>
            <p className="tech-element" style={{
                backgroundColor: colorTheme === "dark" ?
                    colorScheme.backgroundCard :
                    (active ?
                        colorScheme.primary :
                        colorScheme.secondary),
                color: colorTheme === "dark" ?
                    colorScheme.primary :
                    colorScheme.backgroundCard
            }} key={`${i}${el}`}>{el}</p></div>)
    }

    return (
        <div className="showcase" style={{ backgroundColor: hover ? colorScheme.hover2 : colorScheme.backgroundCard }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="cont">
                <div className="top">
                    <p className="header"
                        style={{ color: active ? colorScheme.primary : colorScheme.secondary }}
                    >
                        {header}
                    </p>
                    <p className="descritpion"
                        style={{ color: active ? colorScheme.primary : colorScheme.secondary }}
                    >
                        {description}
                    </p>
                </div>
                <div className="button-row">
                    {
                        downloadURL !== "none" ?
                            <div><a className="button-container"
                                href={downloadURL}
                                target="_blank"
                                style={{ backgroundColor: colorScheme.backgroundCard }}>
                                <Download size={27} color={active ? colorScheme.primary : colorScheme.secondary} style={{ transition: "all 400ms ease-in-out" }} />
                            </a><div className="spcr" /></div> :
                            null
                    }
                    {
                        githubURL !== "none" ?
                            <div><a className="button-container"
                                href={githubURL}
                                target="_blank"
                                style={{ backgroundColor: colorScheme.backgroundCard }}>
                                <GitHub size={27} color={active ? colorScheme.primary : colorScheme.secondary} style={{ transform: "translateY(2px)", transition: "all 400ms ease-in-out" }} />
                            </a><div className="spcr" /></div> :
                            null
                    }
                    {
                        normalURL !== "none" ?
                            <div><a className="button-container"
                                href={normalURL}
                                target="_blank"
                                style={{ backgroundColor: colorScheme.backgroundCard }} >
                                <Link size={27} color={active ? colorScheme.primary : colorScheme.secondary} style={{ transition: "all 400ms ease-in-out" }} />
                            </a></div> :
                            null
                    }
                </div>
                <div className="tech-container" style={{ opacity: hover ? 1 : 0 }}>
                    {generateTech()}
                </div>
            </div >

        </div >
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
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} info={showcaseList[0]} active={true} />
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} info={showcaseList[1]} active={true} />
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
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} info={showcaseList[2]} active={false} />
                            <ShowcaseCard colorScheme={colorScheme} colorTheme={colorTheme} language={language} info={showcaseList[3]} active={false} />
                        </div>
                    </div>
                </section>
                {/* <section className="one-year">
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
                </section> */}
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
                <div className="dot" style={{ backgroundColor: colorScheme.secondary, marginTop: "35px" }} />
            </div>

        </div>
    );
}
export default Work;