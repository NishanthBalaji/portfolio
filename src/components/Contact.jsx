import React from 'react'
import '../styles/Contact.css'

import linkedinLogo from "../assets/linkedin-white.svg";
import githubLogo from "../assets/Github-white.svg";
import mailLogo from "../assets/mail-white.svg";
import instaLogo from "../assets/insta-white.svg";

const Contact = () => {
    return (
        <section className='section section4' id='contact'>


            <main className='contact'>
                <h2>Contact me</h2>
                <p>Questions, thoughts, or just want to say hello?</p>

                <div className='contact-me'>
                    <a href="mailto:iamnishanthbalaji@gmail.com" target='_blank' className='btn'>Contact Now</a>
                </div>

            </main>

            <footer className='footer'>
                <div className='nav-logo'>
                    <nav className='navigation'>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact Me</a>
                    </nav>

                    <section className='contact-logo'>
                        <a href="https://www.linkedin.com/in/nishanth-balaji-360039226/" target='_blank'><img className='skill-logo' src={linkedinLogo} alt="LinkedIn Logo" /></a>
                        <a href="https://github.com/NishanthBalaji" target='_blank'><img className='skill-logo' src={githubLogo} alt="GitHub Logo" /></a>
                        <a href="mailto:iamnishanthbalaji@gmail.com" target='_blank'><img className='skill-logo' src={mailLogo} alt="Mail Logo" /></a>
                        <a href="https://www.instagram.com/_nishanth.007_/" target='_blank'><img className='skill-logo' src={instaLogo} alt="Instagram Logo" /></a>
                    </section>

                </div>

                <h3>Nishanth Balaji</h3>
            </footer>
        </section>
    )
}

export default Contact