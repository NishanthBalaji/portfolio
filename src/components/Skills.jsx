import React from 'react'

import htmlLogo from "../assets/HTML.png";
import cssLogo from "../assets/CSS.png";
import jsLogo from "../assets/Javascript.svg";
import reactLogo from "../assets/React.png";
import nodeLogo from "../assets/NodeJs.svg";
import expressLogo from "../assets/Express.png";
import mongoDBLogo from "../assets/MongoDB.svg";
import apiLogo from "../assets/Api.svg";
import MUILogo from "../assets/MaterialUI.svg";
import gitLogo from "../assets/Git.svg";
import bootstrapLogo from "../assets/bootstrap.svg"
import githubLogo from "../assets/Github.svg";

import '../styles/Skills.css'

import { skillsGSAP } from '../scripts/Skills';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


const Skills = () => {

    useGSAP(() => {
        skillsGSAP();
    })

    return (
        <div className='page3 section3' id='skills'>
            <section className='text-skill'>
                <div className='my-text'>
                    <header>
                        <h2>Me And My Skills</h2>
                    </header>
                    <p>A passionate Front-End Developer skilled in JavaScript, React.js, and modern web technologies, dedicated to building scalable, high performance applications with clean UI/UX. Proficient in HTML, CSS, and JavaScript, ensuring responsive, accessible, and visually engaging designs.</p>

                    <p>Experienced in Node.js, Express.js, and API integration, having developed projects like Fresh From Farm and Tent N Trek. Well versed in Redux, Context API, and full-stack development, enabling seamless state management and optimized workflows.</p>

                    <p>A problem solver, continuously refining skills in data structures and algorithms through coding challenges. Passionate about writing efficient code, debugging, and pushing technical boundaries to create impactful digital experiences. Committed to continuous learning, collaboration, and innovation in the ever-evolving tech landscape. 🚀</p>

                </div>

                <div className='my-skills'>
                    <img className='skill-logo' src={htmlLogo} alt="HTML Logo" />
                    <img className='skill-logo' src={cssLogo} alt="CSS Logo" />
                    <img className='skill-logo' src={jsLogo} alt="Javascript Logo" />
                    <img className='skill-logo' src={reactLogo} alt="React Logo" />
                    <img className='skill-logo' src={nodeLogo} alt="Node.js Logo" />
                    <img className='skill-logo' src={expressLogo} alt="Express.js Logo" />
                    <img className='skill-logo' src={mongoDBLogo} alt="MongoDB Logo" />
                    <img className='skill-logo' src={apiLogo} alt="API Logo" />
                    <img className='skill-logo' src={bootstrapLogo} alt="Bootstrap Logo" />
                    <img className='skill-logo' src={MUILogo} alt="Material UI Logo" />
                    <img className='skill-logo' src={gitLogo} alt="Git Logo" />
                    <img className='skill-logo' src={githubLogo} alt="GitHub Logo" />
                </div>
            </section>
        </div>
    )
}

export default Skills