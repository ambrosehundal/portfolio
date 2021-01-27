import React from 'react'


const Projects = (names) => {
    const projects = names;
    const projectlist = projects.forEach(element => {

        <li>{element}</li>
        
    });


    
    return (
        <div>
            <ul>{projectlist}</ul>
       
        
        </div>
    )

}



export default Projects