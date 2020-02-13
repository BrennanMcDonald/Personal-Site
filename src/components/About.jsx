import React from "react";
import { IconBar } from "./IconBar";

import "../styles/JumboCenter.scss";

export default class JumboCenter extends React.Component {
    render() {
        return (
            <div className="about-bar">
                <div className="col-md-6 img-side">
                </div>
                <div className="col-md-5">
                    <h2 className="font-white">About Me</h2>
                    <p className="font-white">
                        Hi! I'm Brennan McDonald, a 4th year computer science student studying at the University of Ottawa in Canada.
                        Knowledgeable in the art of the DOM and Frontend, I also have vast experience with a large list of topics in Computer Science.
                        Right now I am working on expanding my knowledge in the field of DevOps, Scalability, and Cloud Computing.
                        You can find more information about my experience by viewing my <a className="font-white" href="/resume.pdf"><b>resume</b></a> by clicking the icon above.
                    </p>
                    <p className="font-white">
                        I have 2 years of non-internship experience in Computer Science positions and have held multiple internships at both private and public sector companies.
                        Along with my professional experience, I am an avid 'hacker'. This meaning I attend and host hackathons throughout the year. I have travelled all across
                        North America to participate in and learn more about hackathons.
                        You can view examples of my past experience and side projects I have worked on below in the <a className="font-white" href="#Experience"><b>Experience</b></a> section.
                    </p>
                    <p className="font-white hidden-mobile">
                        When im not doing my homework; I enjoy Science Fiction, Geodesy/Geography, and Food.
                        One thing that tends to tie these together is travel and exploration. I love visiting places to learn
                        more about thier history and learning about destinations by 'travelling like a local'.
                        You can read more about my travels, projects, hobbies, and life on my <a className="font-white" href="https://blog.brennanmcdonald.ca"><b>blog</b></a> below.
                    </p>
                </div>
            </div>
        );
    }
}