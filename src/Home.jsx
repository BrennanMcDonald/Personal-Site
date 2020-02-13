import React from "react";

import JumboCenter from './components/JumboCenter'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import "./styles/home.scss";
import "./styles/HomeSection.scss";
import "./styles/About.scss";
import "./styles/DarkMode.scss";

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false
        }
    }
    
    toggleDarkMode = () => {
        this.setState({
            darkMode: !this.state.darkMode
        })
    }

    render() {
        return (
            <div className={this.state.darkMode?"dark-mode":"light-mode"}>
                <div id="HomeSection">
                    <Nav toggleDarkMode={this.toggleDarkMode} darkMode={this.state.darkMode} />
                    <JumboCenter darkMode={this.state.darkMode} />
                </div>
                <div className="page background-grey" id="About">
                    <About />
                </div>
                <div className="page" id="Projects">
                    <Projects />
                </div>
                <hr className="zig" />
                <hr className="zag" />
                <div className="page" id="Experience">
                    <Experience darkMode={this.state.darkMode} />
                </div>
                <Footer />
            </div>
        );
    }
}