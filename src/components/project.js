import React from 'react';

function Project(props) {
  return (
    <div className="Project">
      <h4>Projects</h4>
            {props.projects.map((element, index) => {
              return <li>{element}</li>;
            })}
    </div>
  );
}

export default Project;