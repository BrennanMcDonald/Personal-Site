import React, { useState } from "react";

import Nav from './components/Nav'
import JumboCenter from './components/JumboCenter'
import Skills from './components/Skills'
import Experience from "./components/Experience";
import Projects from './components/Projects'
import Footer from "./components/Footer";

import "./styles/home.scss";
import "./styles/HomeSection.scss";
import "./styles/DarkMode.scss";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <Nav toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
            <div id="HomeSection">
                <JumboCenter />
            </div>
            <Skills />
            <Experience />
            <Projects />
            <Footer />
        </div>
    );
}
