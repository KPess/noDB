import React, {Component} from "react";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : ["The Rebellion", "Rogue Squadron Hangar"]
        }
    }
    render() {
        const {headers} = this.state;
        return (
            <div>
                <h1>{headers[0]}</h1>
                <h2>{headers[1]}</h2>
            </div>
        )
    }
}

export default Header;

