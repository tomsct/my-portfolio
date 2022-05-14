import "./Navbar.css"
import React, { useState, useContext } from "react"
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"
import { BsBriefcaseFill } from "react-icons/bs"
import { IconContext } from "react-icons/lib";
import LangContext from "./LangProvider";

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const { switchLang, lang } = useContext(LangContext);

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <BsBriefcaseFill />
                            {props.Title}
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="hero" spy={true} smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
                                    {props.HomeButton}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="projects" spy={true} smooth={true} offset={-85} duration={500} className="nav-links" onClick={closeMobileMenu}>
                                    {props.ProjectsButton}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" spy={true} smooth={true} offset={-85} duration={500} className="nav-links" onClick={closeMobileMenu}>
                                    {props.AboutButton}
                                </Link>
                            </li>
                            <div className="flagSection">
                                <img id="btnFlag" className={lang === "es" ? "active" : ""} width="30px" height="30px" src={process.env.PUBLIC_URL + "/images/es.svg"} onClick={() => switchLang("es")} />
                                <img id="btnFlag" className={lang === "en" ? "active" : ""} width="30px" height="30px" src={process.env.PUBLIC_URL + "/images/gb.svg"} onClick={() => switchLang("en")} />
                            </div>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar