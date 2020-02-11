import React from 'react';

import Instagram from '../img/icon-light/icons8-instagram-50.png'
import Twitter from '../img/icon-light/icons8-twitter-50.png'
import Github from '../img/icon-light/icons8-octocat-50.png'
import Resume from '../img/icon-light/icons8-resume-50.png'

import '../styles/iconbar.scss'

export function IconBar() {
    return (
        <div className='social-bar'>
            <a href="https://instagram.com/brennanmcd"><img src={Instagram} /></a>
            <a href="https://twitter.com/bmickeydonald"><img src={Twitter} /></a>
            <a href="https://github.com/brennanmcdonald"><img  src={Github}/></a>
            <a href="/resume.pdf"><img src={Resume} /></a>
        </div>
    )
}