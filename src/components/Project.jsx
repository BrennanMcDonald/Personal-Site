import React from 'react';
import '../styles/project.scss'

export default function Project(props) {
    var projectStyle = {
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (<div className={props.index < 4?"project card":"project card not-mobile"} style={projectStyle}><div onClick={() => window.location.href=props.link} className="hover-span">{props.title}</div></div>)
}