import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // view: "view",
      garage: [],
      year: "",
      make: "",
      model: "",
      nickname: "",
      projects: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateGarage = this.updateGarage.bind(this);
    //   this.changeView = this.changeView.bind(this);
  }

  // }
  // changeView(newView) {
  //   this.setState({ view: newView });
  // }
  componentDidMount() {
    axios.get("/api/garage").then(response => {
      this.setState({ garage: response.data });
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  updateGarage(garage) {
    let { year, make, model, nickname, projects } = this.state;
    let newCar = {
      year: year,
      make: make,
      model: model,
      nickname: nickname,
      projects: projects.split(",")
    };
    axios
      .post("/api/garage", newCar)
      .then(response => {
        console.log("res", response)
        this.setState({ garage: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { garage, year, make, model, nickname, projects } = this.state;
    return (
      <div>
        <header className="box1">
          <h1>The Rebellion</h1>
        </header>

        <main className="main">
          <h3>Rogue Squadron Hangar</h3>
          <form>
            <input
              name="year"
              placeholder="Add new car year"
              value={year}
              onChange={this.handleChange}
            />
            <input
              name="make"
              placeholder="Add new car make"
              value={make}
              onChange={this.handleChange}
            />
            <input
              name="model"
              placeholder="Add new car model"
              value={model}
              onChange={this.handleChange}
            />
            <input
              name="nickname"
              placeholder="Add new car nickname"
              value={nickname}
              onChange={this.handleChange}
            />
            <input
              name="projects"
              placeholder="Comma between projects"
              value={projects}
              onChange={this.handleChange}
            />
            <button type="button" onClick={() => this.updateGarage(garage)}>
              Park
            </button>
            {/* <button type="reset">Reset fields</button> */}
          </form>
          <Car garage={garage} />
        </main>
      </div>
    );
  }
}

export default App;
