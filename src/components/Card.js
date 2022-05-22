import "./Card.css"
import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <>
            <Link to={props.cardTo} className="container-card">
                <div className="container-cardInfo">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + props.image}/>
                    </div>
                    <h3>{props.title}</h3>
                    <p>
                        {props.paragraph}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis neque sodales, eleifend enim eu, lobortis arcu. Ut faucibus facilisis elit. Mauris dictum dolor a 
                        sagittis auctor. Aliquam gravida leo nec orci placerat, in hendrerit tellus condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis neque sodales  
                    </p>
                    <Button buttonSize="btn" buttonColor="primary">
                        {props.lblButton}
                    </Button>
                </div>
            </Link>
        </>
    )
}

export default Card;