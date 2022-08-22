import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import "../styles/Footer.css"

function Footer () {
    return (
        <footer className="footer">
            <div className="socialMedia"> 
                <a href="https://github.com/El-Mariachi760"><FaGithub /></a>
                <a href="mailto:alexandro.h234@gmail.com"><GrMail /></a>
                <a href="https://www.linkedin.com/in/ahernandez369/"><FaLinkedin /></a>
            </div>
            <p>“Not all those who wander are lost.” — Bilbo Baggins</p>
            <p> &copy; 2022 Developer of the 21st Age</p>
        </footer>
    )
}

export default Footer;