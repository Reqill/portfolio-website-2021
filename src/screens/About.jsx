import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import Avatar from '../media/about.svg'
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';


function About({ colorScheme, language, setScreen, colorTheme }) {
    useEffect(() => {
        setScreen(2)
    }, [])
    return (
        <div className="about-page">
            <div>
                <div className="about-container" style={{ backgroundColor: colorScheme.backgroundCard, marginTop: "120px" }}>
                    <div className="about-flex">
                        <div className="about-left">
                            <img src={Avatar} style={{ opacity: (colorTheme === "dark") ? .85 : 1 }} />
                        </div>
                        {language === "EN" ?
                            (<div className="about-right">
                                <p style={{ paddingBottom: "5px", color: colorScheme.secondary }}>
                                    Hello. I'm <span style={{ color: colorScheme.primary }}>Mikołaj Mrózek</span> and I'm a person who is passionate about
                                UI/UX and  website design. <span style={{ color: colorScheme.primary }}>I create awesome looking and modernistic
                                web pages that suits you</span> as well as layout designs with ease of use
                                of them in mind.
                            </p>
                                <p style={{ paddingBottom: "5px", color: colorScheme.secondary }}>
                                    I really like to think about myself as an end-user which helps me a
                                lot in the design process. <span style={{ color: colorScheme.primary }}>I'm always up to challenge</span>, that is why my
                                creations are innovative and thoughtful.
                            </p>
                                <p style={{ color: colorScheme.secondary }}>
                                    You can <Link to="/portfolio" style={{ textDecorationColor: colorScheme.primary, }}>
                                        <span onClick={() => setScreen(1)} style={{
                                            color: colorScheme.primary,
                                        }}>check out my previous work</span></Link> to find out what I'm capable of,
                                nevertheless bringing to life new ideas does not scare me. If you
                                have any questions, or want to cooperate just <Link to="/contact" style={{ textDecorationColor: colorScheme.primary, }}>
                                        <span onClick={() => setScreen(3)} style={{
                                            color: colorScheme.primary,
                                        }}>contact me via form, or e-mail</span>
                                    </Link>.
                            </p>
                            </div>)
                            :
                            (<div className="about-right">
                                <p style={{ paddingBottom: "5px", color: colorScheme.secondary }}>
                                    Cześć, nazywam się <span style={{ color: colorScheme.primary }}>Mikołaj Mrózek</span> i pasjonuje się
                            projektowaniem UI/UX, oraz stron internetowych. <span style={{ color: colorScheme.primary }}>Tworzę modernistyczne i funkcjonalne strony internetowe, które szyte są na miarę </span>
                            tak samo jak projekty layoutów z myślą o łatwości ich użytkowania.
                            </p>
                                <p style={{ paddingBottom: "5px", color: colorScheme.secondary }}>
                                    Lubie myślę o sobie jako o użytkowniku, co pomaga mi w procesie projektowania.
                             <span style={{ color: colorScheme.primary }}> Zawsze stawiam czoła rzucanych mi wyzwaniom</span>, dlatego też moje prace są innowacyjne, oraz przemyślane.
                            </p>
                                <p style={{ color: colorScheme.secondary }}>
                                    Możesz <Link to="/portfolio" style={{ textDecorationColor: colorScheme.primary, }}>
                                        <span onClick={() => setScreen(1)} style={{
                                            color: colorScheme.primary,
                                        }}>zobaczyć moje dotychczasowe prace</span></Link> aby dowiedzieć się do czego jestem zdolny, niemniej
                                nie przeraża mnie wprowadzenie w życie nowych pomysłów i rozwiązań. Jeśli masz jakieś pytania
                                lub chcesz nawiązać współpracę, <Link to="/contact" style={{ textDecorationColor: colorScheme.primary, }}>
                                        <span onClick={() => setScreen(3)} style={{
                                            color: colorScheme.primary,
                                        }}>skontaktuj się ze mną poprzez formularz lub email</span>
                                    </Link>.
                            </p>
                            </div>)
                        }

                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                    <div>
                        <p style={{ color: "rgba(136, 136, 136, .8)", fontWeight: "500", marginBottom: "7px" }}>{language === "EN" ? "You can also find me on:" : "Możesz mnie również znaleźć na:"}</p>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <a href="https://github.com/Reqill" target="_blank"><GitHub size={28} className="social-icon" /></a>
                            <a href="#" target="_blank"><Facebook size={28} className="social-icon" /></a>
                            <a href="#" target="_blank"><Instagram size={28} className="social-icon" /></a>

                        </div>
                    </div>
                </div>

            </div>


        </div >
    );
}

export default About;
