import React from "react";
import Company from '../components/Company';

import '../styles/Experience.scss'

import experience from '../data/experience.json';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="ui items container">
                {
                    experience.map(x => {
                        return (<Company key={x.company} {...x} />)
                    })
                }
            </div>
        );
    }
}