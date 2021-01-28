import React from 'react'


const Projects = (props) => {
    const names = props.names
    const listItems = names.map((name) =>
        <li>{name}</li>

  );
  return (
    <ul>{listItems}</ul>
  );

}



export default Projects