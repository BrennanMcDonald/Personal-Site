import React, { useState } from "react";
import "../styles/nav.scss";

export default function Nav({ darkMode, toggleDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="site-nav">
            <div className="nav-inner">
                <a href="#" className="nav-brand">cd ~</a>
                <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <button
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? '☀' : '☾'}
                    </button>
                </div>
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}
