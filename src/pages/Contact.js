import React, { useState } from 'react';
import axios from 'axios';
import { validateEmail } from '../helpers/ValidateEmail'
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import "../styles/Contact.css"

function Contact({ title }) {

    const [formStatus, setFormStatus] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function dynamicTextbox(e) {
        const textarea = e.target;
        const textHeight = 124;
        textarea.style.height = textHeight + "px";
        if (textarea.scrollHeight > textHeight) {
            textarea.style.height = textarea.scrollHeight + 4 + "px";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(formState).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios({
            method: "post",
            url: "https://getform.io/f/f6fe9094-a074-4eba-a9ea-9fad59785945",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function(response) {
                setFormStatus(true);
                setFormState({ name: '', email: '', message: '' });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return(
        <section id="contact">
            <h2>Contact Me</h2>
            <div className='socialMedia'>
            <a href="https://github.com/El-Mariachi760"><FaGithub /></a>
                <a href="mailto:alexandro.h234@gmail.com"><GrMail /></a>
                <a href="https://www.linkedin.com/in/ahernandez369/"><FaLinkedin /></a>
            </div>
            
                <div className='input-values'>
                    <form id="contact-form" className="contact-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name: <span className="required">*</span></label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />

                        <label htmlFor="email">Email: <span className="required">*</span></label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />

                        <label htmlFor="message">Message: <span className="required">*</span></label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} onChange={dynamicTextbox}></textarea>

                        {errorMessage && <p className="required error">{errorMessage}</p>}

                        <button type="submit">Submit</button>

                        {formStatus && <p className="send-confirm">Message sent!</p>}
                    </form>
                </div>
            <p>You can send me a message through the 
                form above. Or email me directly at <a href="mailto:alexandro.h234@gmail.com">alexandro.h234@gmail.com</a>.</p>
        </section>
    );
}

export default Contact;