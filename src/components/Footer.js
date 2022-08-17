import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import "../styles/Footer.css"

function Footer () {
    return (
        <div className="footer">
            <div className="socialMedia"> 
                <FaGithub />
                <GrMail />
                <FaLinkedin />
            </div>
            <p>“Not all those who wander are lost.” — Bilbo Baggins</p>
            <p> &copy; 2022 Developer of the 21st Age</p>
        </div>
    )
}

export default Footer;