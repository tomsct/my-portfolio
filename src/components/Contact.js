import "./Contact.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./Button";
import { emailJsPublicKey } from "../constants";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_j52i6f9", "template_pmo8n65", form.current, emailJsPublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact">
            <p className="contact-heading">
                Contact me
            </p>
            <div className="col input-areas">
                <form ref={form} onSubmit={sendEmail}>
                    <label> Name </label>
                    <input className="contact-input" name="from_name" type="text" placeholder="Your name" />
                    <label> Email </label>
                    <input className="contact-input" name="from_email" type="email" placeholder="Your Email" />
                    <label> Message </label>
                    <textarea className="contact-input" name="message" rows="3" />
                    <Button value="Send" buttonStyle="btn--outline" buttonId="btnContact" buttonType="submit" buttonValue="Send">Contact</Button>
                </form>
            </div>
        </section>
    );
};