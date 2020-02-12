import React from "react";

import MenuIcon from "../img/icon-light/icons8-menu-vertical-50.png"
import "../styles/nav.scss";

export default class JumboCenter extends React.Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-white navbar-default navbar-fixed-top hidden-desktop">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <img src={MenuIcon} style={{height:'20px'}} />
                            </button>
                            <a className="navbar-brand font-grey" href="#">cd ~</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="#Projects" className="font-grey">Projects</a></li>
                                <li><a href="#Experience" className="font-grey">Experience</a></li>
                                <li><a href="https://blog.brennanmcdonald.ca" className="font-grey">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav className="navbar transparent navbar-default hidden-mobile">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar font-grey"></span>
                                <span className="icon-bar font-grey"></span>
                                <span className="icon-bar font-grey"></span>
                            </button>
                            <a className="navbar-brand font-grey" href="#">cd ~</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav">
                                <li><a href="#Projects" className="font-grey">Projects</a></li>
                                <li><a href="#Experience" className="font-grey">Experience</a></li>
                                <li><a href="https://blog.brennanmcdonald.ca" className="font-grey">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}