import React from 'react';
import '../styles/project.scss'

export default function Company(props) {
    return (
        <div className="item" style={{paddingBottom:"25px"}}>
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="content">
                <a className="header">{props.company}</a>
                <div className="meta">
                    <span>{props.role}</span>
                </div>
                <div className="description">
                    <p dangerouslySetInnerHTML={{__html: props.description}}></p>
                </div>
            </div>
        </div>
    )
}