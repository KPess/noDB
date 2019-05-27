import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car";
import Header1 from "./components/Header1";
import SubHeader from "./components/SubHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header1 />
        <SubHeader />
        <main className="main">
          <Car />
          {/* <Projects projects={projects}/> */}
        </main>
      </div>
    );
  }
}

export default App;
