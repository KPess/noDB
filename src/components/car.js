import React, { Component } from "react";
import Project from "./project";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "BMW",
      model: "325i",
      year: 1989,
      projects: ["Misfire ", "Air Conditioning"],
      displayProjects: false,
    };
  }
  render() {
    console.log(this.state);
    let { make, year, model, projects } = this.state;
    return (
      <nav>
        <header>
          <h1>Rogue Garage</h1>
        </header>
        <div>
          <button onClick={() => {console.log(projects)}}>
            "Rogue 3" {year} {make} {model}
          </button>
          <div>
            {/* The following code was put into a
             functional component names project.js */}
            {/* <h4>Projects</h4>
            {projects.map((element, index) => {
              return <li>{element}</li>;
            })} */}
            <Project projects={this.state.projects}/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Car;
