import React from 'react';
import '../styles/Experience.scss';

export default function Company({ company, location, role, period, duration, bullets }) {
    return (
        <div className="company-card">
            <div className="company-header">
                <div className="company-info">
                    <h3>{company}</h3>
                    <span className="company-location">{location}</span>
                </div>
                <div className="company-meta">
                    <span className="company-role">{role}</span>
                    <span className="company-period">{period} · {duration}</span>
                </div>
            </div>
            <ul className="company-bullets">
                {bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
}
