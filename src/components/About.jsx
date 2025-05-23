import { Typewriter } from 'react-simple-typewriter'

import '../styles/About.css'

import myImg from "../assets/myimg.jpg";

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import { aboutGSAP } from '../scripts/About.js';



import React from 'react'

const About = () => {

    useGSAP(() => {
        aboutGSAP();
    })

    return (
        <div className='page page1'>
            <header>
                {/* <section className='for-pc'>
                <img src={myLogo} alt="myLogo" />
              </section> */}
                <nav className='navbar'>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact Me</a>
                </nav>
            </header>


            <div className='about-img'>
                <main className='about'>
                    <section >
                        <h1>Hi, I'm Nishanth Balaji</h1>
                        <h2>
                            I am a{" "}
                            <span style={{ color: "rgb(45, 45, 111)", fontWeight: "bold" }}>
                                <Typewriter
                                    words={[
                                        "Front-End Developer.",
                                        "Web Developer.",
                                        "React.js Developer.",
                                        "Software Tester.",
                                        "Full Stack Developer.",
                                        "UI Developer.",
                                        "Software Engineer.",
                                    ]}
                                    loop={0} // Infinite looping
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={80}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>
                        <p>Welcome to my portfolio, where I showcase my journey in building intuitive and dynamic web applications. Here, you'll find my projects, skills, and the experiences that shape my growth as a developer.</p>

                        <a href="https://drive.google.com/file/d/1Vz0UJS76pR1qD3FjBRsF6AssPdHYFEnj/view?usp=drive_link" target='_blank' className='btn'>View Resume</a>

                    </section>

                </main>

                <section className='my-img'>
                    <img src={myImg} alt="My Image" />
                </section>
            </div>


            <footer className='footer-name'>
                <h3 className='name'>Nishanth Balaji</h3>
            </footer>
        </div>
    )
}

export default About