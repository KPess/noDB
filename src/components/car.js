import React, { Component } from "react";
// import Project from "./project";



class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default Car;
