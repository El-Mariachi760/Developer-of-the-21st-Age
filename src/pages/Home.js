import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import "../styles/Home.css"

function Home () {
    return (
        <div className="home">
            <div className="introPortrait">
                <h1>Alex Hernandez</h1>
                <h3>Web Developer of the 21st Age</h3>
                {/* <img src="" alt="stardewValleyInspired" ></img> */}
            </div>

            <div className="socialMedia">
                <FaGithub />
                <GrMail />
                <FaLinkedin />
            </div>

            <div className="about">
                <div className="prompt">
                    <p>
                    When I am not out on a journey, eating at a new restaurant, or playing video games, 
                    I look for new perspectives to solve future challeges.
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