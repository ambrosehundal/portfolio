import React from 'react'


const Projects = ({name, description, tech_stack, project_link}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <h6>{tech_stack}</h6>
            <p>{project_link}</p>
        
        </div>
    )

}



export default Projects