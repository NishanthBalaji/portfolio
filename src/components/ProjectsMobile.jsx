import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { projectsMobileGSAP } from '../scripts/ProjectsMobile.js';

import '../styles/ProjectsMobile.css';

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

const ProjectsMobile = () => {

    useGSAP(() => {
        projectsMobileGSAP();
    })

    return (
        <div className='page2-for-m' id='projects'>
            <div className='page2-header-m '><h1>Projects</h1></div>
            <section className='projects-m'>
                <div className="project-m project1-m">
                    <div className="container-m">
                        <div className='my-skills-project-m'>
                            <img className='skill-logo-project skill-logo-project-m' src={htmlLogo} alt="HTML Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={cssLogo} alt="CSS Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={jsLogo} alt="Javascript Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={reactLogo} alt="React Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={nodeLogo} alt="Node.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={expressLogo} alt="Express.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={mongoDBLogo} alt="MongoDB Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={apiLogo} alt="API Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={MUILogo} alt="Material UI Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={gitLogo} alt="Git Logo" />
                        </div>
                        <div className='project-text-m'>
                            <h2>Fresh From Farm</h2>
                            <p>Fresh From Farm is a cutting-edge quick commerce platform delivering farm-fresh products straight to your doorstep within 15 minutes. Inspired by Zepto’s sleek UI, it offers a seamless shopping experience across 12 diverse categories. Beyond convenience, it empowers users with full control through intuitive CRUD features allowing them to add, edit, and manage products effortlessly. Experience freshness, speed, and flexibility like never before!</p>

                            <a href="https://freshfromfarm.onrender.com/" target='_blank' className='btn'>Visit Site</a>
                        </div>
                    </div>

                </div>

                <div className="project-m project2-m">
                    <div className="container-m">
                        <div className='my-skills-project-m'>
                            <img className='skill-logo-project skill-logo-project-m' src={htmlLogo} alt="HTML Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={cssLogo} alt="CSS Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={jsLogo} alt="Javascript Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={reactLogo} alt="React Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={nodeLogo} alt="Node.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={expressLogo} alt="Express.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={mongoDBLogo} alt="MongoDB Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={apiLogo} alt="API Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={MUILogo} alt="Material UI Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={gitLogo} alt="Git Logo" />
                        </div>
                        <div className='project-text-m'>
                            <h2>Quizly</h2>
                            <p>Quizly is an engaging quiz platform where users can test their knowledge across various topics. Choose from multiple categories like Sports, Geography, and more, answer a series of questions, and receive an instant score at the end of the test. Whether for fun or learning, Quizly helps you challenge yourself and track your progress! 🚀</p>

                            <a href="https://quizly-o0k2.onrender.com/" target='_blank' className='btn'>Visit Site</a>
                        </div>
                    </div>

                </div>

                <div className="project-m project3-m">
                    <div className="container-m">
                        <div className='my-skills-project-m'>
                            <img className='skill-logo-project skill-logo-project-m' src={htmlLogo} alt="HTML Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={cssLogo} alt="CSS Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={jsLogo} alt="Javascript Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={reactLogo} alt="React Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={nodeLogo} alt="Node.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={expressLogo} alt="Express.js Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={mongoDBLogo} alt="MongoDB Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={apiLogo} alt="API Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={MUILogo} alt="Material UI Logo" />
                            <img className='skill-logo-project skill-logo-project-m' src={gitLogo} alt="Git Logo" />
                        </div>
                        <div className='project-text-m'>
                            <h2>Tent N Trek</h2>
                            <p>Tent N Trek is the ultimate platform for campground exploration, allowing users to discover scenic campsites across India (with global expansion in mind). Browse detailed listings with images, locations, pricing, and user reviews to find the perfect camping spot or even list their own campground. Whether you're planning your next adventure or sharing your experiences, Tent N Trek makes campground discovery seamless and exciting! 🏕️✨</p>

                            <a href="https://tent-n-trek.onrender.com/" target='_blank' className='btn'>Visit Site</a>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default ProjectsMobile