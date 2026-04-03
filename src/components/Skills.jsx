import React from 'react';
import '../styles/skills.scss';

const skillGroups = [
    {
        category: "Languages",
        items: ["JavaScript", "Python", "Rust", "Java", "SQL"]
    },
    {
        category: "Frameworks",
        items: ["React & Next.js", "Vue & Nuxt.js", "Android", "Jest", "JUnit"]
    },
    {
        category: "Technologies",
        items: ["AWS", "Linux/Unix", "Docker", "Git", "Grafana"]
    }
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="section-container">
                <h2 className="section-title">Skills</h2>
                <div className="skill-groups">
                    {skillGroups.map(group => (
                        <div key={group.category} className="skill-group">
                            <h3>{group.category}</h3>
                            <div className="skill-tags">
                                {group.items.map(item => (
                                    <span key={item} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="ai-note">
                    Leverage Claude, ChatGPT, and Cursor to run parallel agentic workflows across large codebases, accelerating planning, navigation, and delivery.
                </p>
            </div>
        </section>
    );
}
