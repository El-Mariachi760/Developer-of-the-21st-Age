import React from "react";
import { useParams } from 'react-router-dom'
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css"

function ProjectDisplay () {
    const { id } = useParams();
    const project = projectList[id]
    return <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="project images"/>
        <p><b>Made with:</b>{project.skills}</p>
        <div className="repoLinks">
            <ul>
                <li>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer"><b>Link to Repo</b></a>
                </li>
                <li>
                    <a href={project.webpage} target="_blank" rel="noopener noreferrer"><b>Link to Deployment</b></a>
                </li>
             </ul>    
        </div>
        
    </div>
    
}

export default ProjectDisplay;