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
                        <Link to="/Developer-of-the-21st-Age/"> Home </Link>
                    </li>
                    <li>

                        <Link to="/Developer-of-the-21st-Age/projects"> Projects </Link>  
                    </li>
                    <li>
                        <Link to="/Developer-of-the-21st-Age/experience"> Experience </Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;