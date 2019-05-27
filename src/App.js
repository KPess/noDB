import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car";
import Header1 from "./components/Header1";
import SubHeader from "./components/SubHeader";
import Info from "./components/Info";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "garage"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <nav>
          <button
            className={this.state.view === "garage" ? "current" : ""}
            onClick={() => this.setState({ view: "garage" })}
          >
            Garage
          </button>
          <button
            className={this.state.view === "info" ? "current" : ""}
            onClick={() => this.setState({ view: "info" })}
          >
            Info
          </button>
        </nav>
        <header>
          <Header/>
          <Header1 />
          <SubHeader />
        </header>
        {this.state.view === "garage" ? (
          <Car />
        ) : (
          <Info changeView={this.changeView} />
        ) }
      </div>
    );
  }
}

export default App;
