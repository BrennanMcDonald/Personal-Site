import React from "react";

import "../styles/JumboCenter.scss";
import { IconBar } from "./IconBar";

export default class JumboCenter extends React.Component {
    render() {
        return (
            <div className="about-bar">
                <div className="top-triangle"></div>
                <div className="container">
                    <h2 className="font-white">About Me</h2>
                    <p className="font-white">Hi! I'm Brennan McDonald, a 4th year computer science student studying at the University of Ottawa in Canada.
                    Knowledgeable in the art of the DOM and Frontend, I also have vast experience with a large list of topics in Computer Science.
                    You can view examples of my past experience and side projects I have worked on below, as well as seeing them on my Resume from the icon above</p>
                    <p className="font-white hidden-mobile">When im not doing my homework; I enjoy Science Fiction, Video Games, and All forms of exploration.</p>
                </div>
                <div className="bottom-triangle"></div>
            </div>
        );
    }
}