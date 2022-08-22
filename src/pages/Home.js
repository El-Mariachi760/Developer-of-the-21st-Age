import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import "../styles/Home.css"
import Potrait from "../assets/images/Alex.png"

function Home () {
    return (
        <div className="home">
            <div className="introPortrait">
                <section className="intro">
                    <h1>Alex Hernandez</h1>
                    <h3>Full Stack Developer of the 21st Age</h3>
                </section>
                    <img src={Potrait} alt="stardewValleyInspired" />
            </div>

            <div className="socialMedia">
                <a href="https://github.com/El-Mariachi760"><FaGithub /></a>
                <a href="mailto:alexandro.h234@gmail.com"><GrMail /></a>
                <a href="https://www.linkedin.com/in/ahernandez369/"><FaLinkedin /></a>
            </div>

            <div className="about">
                <h2>About Me</h2>
                <div className="prompt">
                    <p>
                    I am a Full Stack Developer with a background in data analytics. I have a passion for learning and creating. When I am not doing either, I am enjoying
                    a cold beer with view.
                    </p>
                    <br></br>
                    <p>
                    “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”
                    ― Albert Einstein
                    </p>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS, NPM, Bootstrap</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, .NET, ExpressJS, GraphQL, MySQL, MongoDB, MS SQL
                        </span>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Home;