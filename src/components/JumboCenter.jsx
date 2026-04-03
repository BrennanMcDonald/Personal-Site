import React from "react";
import { IconBar } from "./IconBar";
import "../styles/JumboCenter.scss";

export default function JumboCenter() {
    return (
        <div id="JumboCenter">
            <h1>Brennan<br />McDonald</h1>
            <p className="hero-title">Software Engineer II at Dropbox</p>
            <p className="hero-location">Vancouver, Canada</p>
            <IconBar />
        </div>
    );
}
