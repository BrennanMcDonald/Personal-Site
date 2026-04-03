import React from 'react';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>© {new Date().getFullYear()} Brennan McDonald</p>
                <p>
                    <a href="https://github.com/BrennanMcDonald" target="_blank" rel="noopener noreferrer">
                        github.com/BrennanMcDonald
                    </a>
                </p>
            </div>
        </footer>
    );
}
