import "./Contact.css"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FcApproval } from "react-icons/fc"
import { Button } from "./Button";
import { emailJsPublicKey } from "../constants";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Contact = (props) => {
    const [sent, setSent] = useState(false);
    const [text, setText] = useState("");
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        let payload = {
            from_name: form.current.children.from_name.value ,
            message: text,
            from_email: form.current.children.from_email.value
        };
        
        emailjs.send("service_j52i6f9", "template_pmo8n65", payload, emailJsPublicKey).then(setSent(true));
    };

    const OnEditorChange = (event, editor) => {
        setText(editor.getData());
    };

    return (
        <section className="contact">
            {sent ?
                <div>
                    <FcApproval size={70} />
                    <p id="successMessage">{props.successMessage}</p>
                </div>
                :
                <div>
                    <p className="contact-heading">
                        <u>{props.topLine}</u>
                    </p>
                    <div className="input-areas">
                        <form ref={form} onSubmit={sendEmail}>
                            <input className="contact-input" name="from_name" type="text" placeholder="Name" />
                            <input className="contact-input" name="from_email" type="email" placeholder="Email" />
                            <CKEditor editor={ClassicEditor} onChange={OnEditorChange} />
                            <Button buttonStyle="btn--outline" buttonId="btnContact" buttonType="submit" buttonValue="Send">{props.lblButton}</Button>
                        </form>
                    </div>
                </div>
            }
        </section>
    );
};