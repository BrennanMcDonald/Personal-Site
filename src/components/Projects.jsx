import React from "react";
import Project from './Project';
import '../styles/Projects.scss';
import project_data from '../data/projects.json';

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {project_data.map((project, i) => (
                        <Project key={i} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
