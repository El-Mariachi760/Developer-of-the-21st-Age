import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa"


function Navbar () {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className="toggleBtn">
                <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                    }}
                >
                    <FaBars />
                </button>
            </div>
            <div className="links">
                <a href="/" className="siteLogo">
                    AH
                </a>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>

                        <Link to="/projects"> Projects </Link>  
                    </li>
                    <li>
                        <Link to="/experience"> Experience </Link> 
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link> 
                    </li>
                    <li>
                        <a href={require("../assets/resume/AhernandezResume.pdf")} target="_blank" rel="noreferrer"> Resume </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;