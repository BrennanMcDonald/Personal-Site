import React from "react";

import "../styles/JumboCenter.scss";
import { IconBar } from "./IconBar";

export default class JumboCenter extends React.Component {
    render() {
        return (
            <div id="JumboCenter" className="text-center container">
                <h1>Brennan<br />McDonald</h1>
                <h2>Computer Science Student</h2>
                <h2>Freelance Web Developer</h2>
                <IconBar darkMode={this.props.darkMode} />
            </div>
        );
    }
}