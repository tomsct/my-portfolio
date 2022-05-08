import "./Card.css"
import React from "react";
import { Button } from "./Button";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ cardTo, cardTitle }) {
    return (
        <>
            <Link to={cardTo} className="container-card">
                <div className="container-cardInfo">
                    <div className="icon">
                        <FaFire />
                    </div>
                    <h3>{cardTitle}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis neque sodales, eleifend enim eu, lobortis arcu. Ut faucibus facilisis elit. Mauris dictum dolor a 
                        sagittis auctor. Aliquam gravida leo nec orci placerat, in hendrerit tellus condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis neque sodales, 
                        eleifend enim eu, lobortis arcu. Ut faucibus facilisis elit. Mauris dictum dolor a sagittis auctor.
                    </p>
                    <Button buttonSize="btn--wide" buttonColor="primary">
                       More info 
                    </Button>
                </div>
            </Link>
        </>
    )
}

export default Card;