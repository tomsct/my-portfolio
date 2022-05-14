import "./Projects.css";
import React from "react";
import Card from "./Card";
import { IconContext } from "react-icons/lib";

function Projects(props) {
    return (
        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div className="projects__section" id="projects">
                <div className="projects__wrapper">
                    <h1 className="projects__heading">Projects</h1>
                    <div className="projects__container">
                            <Card {...props[0]} />
                            <Card {...props[1]} />
                            <Card {...props[2]} />
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Projects;