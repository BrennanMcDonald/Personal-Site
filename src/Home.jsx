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

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <div id="HomeSection">
                    <Nav />
                    <JumboCenter />
                </div>
                <div className="page" id="About">
                    <About />
                </div>
                <div className="page" id="Projects">
                    <Projects />
                </div>
                <div className="page" id="Experience">
                    <Experience />
                </div>
                <div className="page" id="Blog">

                </div>
                <Footer />
            </div>
        );
    }
}