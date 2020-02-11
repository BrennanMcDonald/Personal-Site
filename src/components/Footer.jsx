import React from "react";

import commit from "../../commit.json"

import '../styles/Footer.scss'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p id="PrevCommit">Last Update: {commit.prev_commit} : {commit.date}</p>
            </div>
        );
    }
}