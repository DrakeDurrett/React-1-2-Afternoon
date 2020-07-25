import React, { Component } from "react";


class NavBar extends Component {
    render() {
        return (
        <div className="nav-buttons">
            <button className="button" onClick={this.props.previousUser}> Previous </button>
            <button className="button" onClick={this.props.nextUser}> Next </button>
        </div>
        )
    }
}

export default NavBar; 