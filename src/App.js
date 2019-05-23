import React, { Component } from "react";
import "./App.css";
import Car from "./components/car"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "Car",
            cars: []
        };
        this.changeView = this.changeView.bind(this);

    }
    changeView(newView) {
        this.setState({ view: newView});
    }
    render() {
        return(
            <div>
                <header>
                    <h1>
                    The Rebellion
                    </h1>
                </header>
                <nav>
                  <Car />
                </nav>
            </div>
        )
    }
}

export default App