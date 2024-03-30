import { useState } from "react";
import { sendContact } from "../../api/contactApi";
import { SeparateLine } from "../separateLines/SeparateLine";

export const ContactForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
        };
        sendContact(formData)
    }
    return (
        <div id="contact" className="contact">
            <h3>Contactez moi</h3>
            <SeparateLine />
            <br />
            <form action="" className="contact__form">
                <input type="text" id="name" className="contact__form-input" placeholder="Nom*" value={name} onChange={(e) => setName(e.target.value)} aria-label="Nom"/>
                <input type="email" id="email" className="contact__form-input" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email"/>
                <textarea name="message" id="message" cols="30" rows="5" className="contact__form-input" placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} aria-label="Message"></textarea>
                <button type="submit" className="btn contact__form-btn" onClick={onSubmit}>Envoyer</button>
            </form>
        </div>
    );
};