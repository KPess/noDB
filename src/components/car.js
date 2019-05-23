import React, { Component } from "react";
// import Project from "./project";

let carsArray = [
  {
    make: "BMW",
    model: "325i",
    year: 1989,
    nickname: "Rogue 3",
    projects: ["Misfire ", "Air Conditioning"],
    displayProjects: false
  },
  {
    make: "Scion",
    model: "xB",
    year: 2009,
    nickname: "Brave Little Toaster",
    projects: ["Headlamp ", "Bumper"],
    displayProjects: false
  }
];

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "BMW",
      model: "325i",
      year: 1989,
      nickname: "Rogue 3",
      projects: ["Misfire ", "Air Conditioning"],
      displayProjects: false
    };
  }
  render() {
    // console.log(this.state);
    // let { make, year, model, projects } = this.state;
    let carsList = carsArray.map((carObject, index) => {
      return (
        <div key={index}>
          <h1 key="nickname">"{carObject.nickname}"</h1>
          <h5>
            {carObject.year} {carObject.make} {carObject.model}
          </h5>
          <li>{carObject.projects[0]}</li>
          <li>{carObject.projects[1]}</li>
        </div>
      );
    });
    return (
      <nav>
        <div>{carsList}</div>
      </nav>
    );
  }
}

export default Car;
