import React from "react";
import Project from '../components/Project';

import "../styles/JumboCenter.scss";
import '../styles/Projects.scss'

import project_data from '../data/projects.json';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                {
                    project_data.map((project,i)=> {
                        return (<Project key={i} index={i} {...project} />)
                    })
                }
            </div>
        );
    }
}