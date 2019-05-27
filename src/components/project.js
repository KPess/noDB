// import React from "react";

// function Project(props) {
//   return (
//     <div className="Project">
//       <h4>Projects</h4>
//       {props.projects.map((element, index) => {
//         return <li key={index}>{element}</li>;
//       })}
//     </div>
//   );
// }

// export default Project;
import React, { Component } from "react";


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    console.log(this.props);
    // let { make, year, model, projects } = this.state;
    let carsList = this.props.garage.map((carObject, index) => {
      return (
        <div key={index}>
          <h1 key="nickname">"{carObject.nickname}"</h1>
          <h5>
            {carObject.year} {carObject.make} {carObject.model}
          </h5>
          <ul>
            <li>{carObject.projects[0]}</li>
            <li>{carObject.projects[1]}</li>
          </ul>
        </div>
      );
    });
    return (
      <main>
        <div>{carsList}</div>
      </main>
    );
  }
}

export default Project;
