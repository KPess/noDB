import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Project from "./Project";
import Footer from "./Footer";
import Emblem from "./Emblem";
import Header1 from "./Header1"
import SubHeader from "./SubHeader"
class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garage: [],
      year: "",
      make: "",
      model: "",
      nickname: "",
      projects: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateGarage = this.updateGarage.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
  }

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
        this.setState({ garage: response.data });
        this.props.changeView("garage");
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteCar(garage) {
    this.setState({ garage: garage });
  }

  render() {
    const { garage, year, make, model, nickname, projects } = this.state;
    return (
      <div>
        <main className="main">
        <div className="subheader">
            <Header1 />
            <SubHeader />
          </div>
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

            {/* Need park button to clear fields */}
            <button type="button" onClick={() => this.updateGarage(garage)}>
              Park
            </button>
            {/* <input type="reset" value="reset"/> */}
          </form>
          <Project
            garage={garage}
            projects={projects}
            deleteCar={this.deleteCar}
          />
          {/* <Projects projects={projects}/> */}
        </main>
        <footer>
          <Emblem />
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Car;
