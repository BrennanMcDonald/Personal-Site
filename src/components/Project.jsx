import React from 'react';
import '../styles/project.scss';

export default function Project({ title, stack, description, link }) {
    const isExternal = link && link !== '#';
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>
                    {isExternal ? (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {title} <span className="project-link-arrow">↗</span>
                        </a>
                    ) : (
                        <span>{title}</span>
                    )}
                </h3>
                <span className="project-stack">{stack}</span>
            </div>
            <p className="project-description">{description}</p>
        </div>
    );
}
