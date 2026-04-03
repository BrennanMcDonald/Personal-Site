import React from "react";
import Company from './Company';
import '../styles/Experience.scss';
import experience from '../data/experience.json';

export default function Experience() {
    return (
        <section id="experience">
            <div className="section-container">
                <h2 className="section-title">Experience</h2>
                {experience.map(x => (
                    <Company key={x.company} {...x} />
                ))}
            </div>
        </section>
    );
}
