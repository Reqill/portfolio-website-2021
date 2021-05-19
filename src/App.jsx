import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/style.css'

import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Work from './screens/Work.jsx'
import Contact from './screens/Contact.jsx'
import NotFound from './screens/NotFound.jsx'
import DarkSwitch from './components/DarkSwitch.jsx'
import LangSwitch from './components/LangSwitch.jsx'
import LinkAnchor from './components/LinkAnchor.jsx'

import LogoWhite from './media/logoMM-white@SVG.svg'
import LogoColor from './media/logoMM-color@SVG.svg'


function App() {
  const [colorTheme, setColorTheme] = useState('light')
  const [language, setLanguage] = useState('EN')
  const [screen, setScreen] = useState(null)
  const [colorScheme, setColorScheme] = useState(null)
  //TODO: integrate cookies
  const colorSchemeData = {
    light: {
      primary: "#3F37C9",
      secondary: "#4895EF",
      backgroundPage: "#F5F5F5",
      backgroundCard: "#FEFEFE",
      hover: "#FCFCFC",
      gradient: `linear-gradient(#F5F5F5 10%, transparent)`,
      hover2: "#ECECEC",
    },
    dark: {
      primary: "#F4F4F4",
      secondary: "#F4F4F4",
      backgroundPage: "#1B1B1B",
      backgroundCard: "#232323",
      hover: "#333333",
      gradient: `linear-gradient(#1B1B1B 10%, transparent)`,
      hover2: "#1E1E1E",
    }
  }

  useEffect(() => {
    if (colorTheme === 'light' && colorScheme !== colorSchemeData.light) {
      return setColorScheme(colorSchemeData.light)
    }
    else if (colorTheme === 'dark' && colorScheme !== colorSchemeData.dark) {
      return setColorScheme(colorSchemeData.dark)
    }

  }, [colorTheme])

  if (colorScheme === null) {
    if (colorTheme === "light") {
      setColorScheme(colorSchemeData.light);
    } else {
      setColorScheme(colorSchemeData.dark);
    }
    return null;
  } else {
    return (
      <Router>
        <main style={{ backgroundColor: colorScheme.backgroundPage }}>
          <div style={{ height: "60px" }} />
          <div className="navBg" style={{ backgroundColor: colorScheme.backgroundPage }}>
            <nav>
              <Link to="/">
                <div className="logo-container" onClick={() => setScreen(0)}>
                  <div className="logo">
                    <img src={(colorTheme === "light") ? LogoColor : LogoWhite} style={{ marginTop: (colorTheme === "light") ? null : "12px" }} />
                  </div>
                  <h2><span style={{ color: colorScheme.primary, paddingRight: "1px" }}>MIKOŁAJ</span> <span style={{ color: colorScheme.secondary }}>MRÓZEK</span></h2>
                </div>
              </Link>
              <div className="right-navbar">
                <ul>
                  <li>
                    <Link to="/portfolio">
                      <LinkAnchor setScreen={setScreen} activeIdx={screen} idx={1} colorScheme={colorScheme} text="portfolio" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <LinkAnchor setScreen={setScreen} activeIdx={screen} idx={2} colorScheme={colorScheme} text={language === "EN" ? "about" : "o mnie"} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <LinkAnchor setScreen={setScreen} activeIdx={screen} idx={3} colorScheme={colorScheme} text={language === "EN" ? "contact" : "kontakt"} />
                    </Link>
                  </li>
                </ul>
                <div className='options'>
                  <LangSwitch currentLanguage={language} switchLanguage={setLanguage} colorScheme={colorScheme} />
                  <DarkSwitch currentTheme={colorTheme} switchTheme={setColorTheme} colorScheme={colorScheme} language={language} />
                </div>
              </div>
            </nav>
          </div>



          <Switch>
            <Route path="/portfolio">
              <Work colorScheme={colorScheme} colorTheme={colorTheme} language={language} setScreen={setScreen} />
            </Route>
            <Route path="/about">
              <About colorScheme={colorScheme} colorTheme={colorTheme} language={language} setScreen={setScreen} />
            </Route>
            <Route path="/contact">
              <Contact colorScheme={colorScheme} colorTheme={colorTheme} language={language} setScreen={setScreen} />
            </Route>
            <Route path="/">
              <Home colorScheme={colorScheme} colorTheme={colorTheme} language={language} />
            </Route>
            <Route path="*">
              <NotFound colorScheme={colorScheme} colorTheme={colorTheme} language={language} setScreen={setScreen} />
            </Route>
          </Switch>
        </main>
      </Router >
    );
  }

}

export default App;
