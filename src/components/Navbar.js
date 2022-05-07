import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";

function Navbar() {
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

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            my-portfolio
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="hero" spy={true} smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="projects" spy={true} smooth={true} offset={-85} duration={500} className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar