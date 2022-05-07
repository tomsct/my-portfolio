import "./Projects.css";
import React from "react";
import Card from "./Card";
import { IconContext } from "react-icons/lib";
import "react-multi-carousel/lib/styles.css";

function Pricing() {
    return (
        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div className="projects__section" id="projects">
                <div className="projects__wrapper">
                    <h1 className="projects__heading">Projects</h1>
                    <div className="projects__container">
                            <Card {...{ cardTo: "/", cardTitle: "Projecto 1" }} />
                            <Card {...{ cardTo: "/", cardTitle: "Projecto 2" }} />
                            <Card {...{ cardTo: "/", cardTitle: "Projecto 3" }} />
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Pricing;