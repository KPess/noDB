import React, { Component } from "react";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { garage } = this.props;
    let carsList = garage.map((carObject, index) => {
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
          <button
            onClick={() => {
              axios
              .delete("/api/garage/" + carObject.id)
              .then(response => {
                this.props.deleteCar(response.data);
              })
              .catch(error => {
                console.log(error);
              });
            }}
          >
            Delete Car
          </button>
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
