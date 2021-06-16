import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import { GitHub } from 'react-feather';
import { Link } from 'react-feather';
import { Download } from 'react-feather';
import PortfolioOneImage from '../media/portfolio1mock.png'
import PortfolioTwoImage from '../media/portfolio2mock.png'
import SuiloOneImage from '../media/suilo1mock.png'
import SuiloTwoImage from '../media/suilo2mock.png'
import TchnienieOneImage from '../media/tchnienie1mock.png'
import TchnienieTwoImage from '../media/tchnienie2mock.png'
import TchnienieThreeImage from '../media/tchnienie3mock.png'


const showcaseList = [
    {
        header: "Portfolio wesite",
        headerPol: "Strona z portfolio",
        description: "design and execution",
        descriptionPol: "projekt i realizacja",
        githubURL: "#",
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
            [PortfolioOneImage, "desktop with website mockup 1.1"],
            [PortfolioTwoImage, "desktop with website mockup 1.2"]
        ],
    },
    {
        header: "Tchnienie app",
        headerPol: "Aplikacja tchnienie",
        description: "design and execution",
        descriptionPol: "projekt i realizacja",
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
            [TchnienieOneImage, "phone with app mockup 1.1"],
            [TchnienieTwoImage, "phone with app mockup 1.2"],
            [TchnienieThreeImage, "phone with app mockup 1.3"]
        ],
    },
    {
        header: "SUILO website",
        headerPol: "Strona SUILO",
        description: "design and execution",
        descriptionPol: "projekt i realizacja",
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
            [SuiloOneImage, "desktop with website mockup 2.1"],
            [SuiloTwoImage, "desktop with website mockup 2.2"]
        ],
    },
    {
        header: "PlanIO app",
        headerPol: "Aplikacja planIO",
        description: "design and execution",
        descriptionPol: "projekt i realizacja",
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
            [TchnienieOneImage, "Phone with app mockup 2.1"],
            [TchnienieTwoImage, "Phone with app mockup 2.2"],
            [TchnienieThreeImage, "Phone with app mockup 2.3"]
        ],
    }
]



const ShowcaseCard = ({ colorTheme, language, colorScheme, info, active }) => {
    const [hover, setHover] = useState(false);

    const {
        header,
        headerPol,
        description,
        descriptionPol,
        githubURL,
        normalURL,
        downloadURL,
        technologies,
        photos,
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

    const generateImg = () => {
        if (type === "mobile") {
            return (
                <div className="imgs-phone" style={{ opacity: (colorScheme === "dark") ? 0.85 : 1 }}>
                    <div className="phone-img">
                        <img src={photos[0][0]} alt={photos[0][1]} />
                    </div>
                    <div className="phone-img">
                        <img src={photos[1][0]} alt={photos[1][1]} />
                    </div>
                    <div className="phone-img">
                        <img src={photos[2][0]} alt={photos[2][1]} />
                    </div>
                </div>
            );
        } else if (type === "desktop") {
            return (
                <div className="imgs-desktop" style={{ opacity: (colorScheme === "dark") ? 0.85 : 1 }}>
                    <div className="desktop-front">
                        <img src={photos[0][0]} alt={photos[0][1]} />
                    </div>
                    <div className="desktop-behind">
                        <img src={photos[1][0]} alt={photos[1][1]} />
                    </div>
                </div>
            );
        }
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
                        {language === "EN" ? header : headerPol}
                    </p>
                    <p className="descritpion"
                        style={{ color: active ? colorScheme.primary : colorScheme.secondary }}
                    >
                        {language === "EN" ? description : descriptionPol}
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
                {generateImg()}
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