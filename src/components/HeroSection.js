import "./HeroSection.css";
import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Contact } from "./Contact";

function HeroSection(props) {
    return (
        <>
            <div className={props.lightBg ? "home__hero-section" : "home__hero-section darkBg"} id="hero">
                <div className="container">
                    { props.isContact ?
                        <Contact {...props} /> 
                        :
                        <div className="row home__hero-row" style={{ display: "flex", flexDirection: props.imgStart === "start" ? "row-reverse" : "row" }}>
                            <div className="col">
                                <div className="home__hero-img-wrapper">
                                    <img src={process.env.PUBLIC_URL + props.img} alt={props.alt} className="home__hero-img" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="home__hero-text-wrapper">
                                    <div className="top-line">{props.topLine}</div>
                                    <h1 className={props.lightText ? "heading" : "heading dark"}>
                                        {props.headline}
                                    </h1>
                                    <p className={props.lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>
                                        {props.description}
                                    </p>
                                    <Link to="">
                                        <Button buttonSize="btn--wide" buttonColor="blue">
                                            {props.buttonLabel}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default HeroSection;