import React from "react";
import { useNavigate } from "react-router-dom"

function ProjectItem ({ image, name, desc,  id, }) {
    const navigate = useNavigate();
    return (
        <div className="projectItem" onClick={() => {
            navigate("/Developer-of-the-21st-Age/project/" + id)
            }}
            >
            <h2> {name} </h2>
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <h3> {desc} </h3>
        </div>
    )
}

export default ProjectItem;