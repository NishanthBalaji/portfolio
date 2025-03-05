import React from 'react'
import '../styles/MySkills.css'

const MySkills = () => {
    return (
        <section className='section section3' id='skills'>


            <section className='text-skill'>
                <div className='my-text'>
                    <header>
                        <h2>Me And My Skills</h2>
                    </header>
                    <p>A passionate Front-End Developer skilled in JavaScript, React.js, and modern web technologies, dedicated to building scalable, high-performance applications with clean UI/UX. Proficient in HTML, CSS, and JavaScript, ensuring responsive, accessible, and visually engaging designs.</p>

                    <p>Experienced in Node.js, Express.js, and API integration, having developed projects like Fresh From Farm and Tent N Trek. Well-versed in Redux, Context API, and full-stack development, enabling seamless state management and optimized workflows.</p>

                    <p>A problem solver, continuously refining skills in data structures and algorithms through coding challenges. Passionate about writing efficient code, debugging, and pushing technical boundaries to create impactful digital experiences. Committed to continuous learning, collaboration, and innovation in the ever-evolving tech landscape. 🚀</p>

                </div>

                <div className='my-skills'>
                    <img className='skill-logo' src="src\assets\HTML.png" alt="HTML Logo" />
                    <img className='skill-logo' src="src\assets\CSS.png" alt="CSS Logo" />
                    <img className='skill-logo' src="src\assets\Javascript.svg" alt="Javascript Logo" />
                    <img className='skill-logo' src="src\assets\React.png" alt="React Logo" />
                    <img className='skill-logo' src="src\assets\NodeJs.svg" alt="Node.js Logo" />
                    <img className='skill-logo' src="src\assets\Express.png" alt="Express.js Logo" />
                    <img className='skill-logo' src="src\assets\MongoDB.svg" alt="MongoDB Logo" />
                    <img className='skill-logo' src="src\assets\Api.svg" alt="API Logo" />
                    <img className='skill-logo' src="src\assets\bootstrap.svg" alt="Bootstrap Logo" />
                    <img className='skill-logo' src="src\assets\MaterialUI.svg" alt="Material UI Logo" />
                    <img className='skill-logo' src="src\assets\Git.svg" alt="Git Logo" />
                    <img className='skill-logo' src="src\assets\Github.svg" alt="GitHub Logo" />
                </div>
            </section>



        </section>
    )
}

export default MySkills