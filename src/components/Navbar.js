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
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
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
                <Link to="/"> Home </Link>
                <Link to="/skills"> Skills </Link> 
                <Link to="/projects"> Projects </Link>  
            </div>
        </div>
    )
}

export default Navbar;