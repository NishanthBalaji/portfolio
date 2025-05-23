import React, { useEffect } from 'react'

import './App.css'

import About from './components/About';
import ProjectsMobile from './components/ProjectsMobile';
import ProjectsPC from './components/ProjectsPC';
import Skills from './components/Skills';
import Contact from './components/Contact';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useGSAP(() => {

    // if (window.innerWidth > 768) {
    // apply GSAP horizontal scroll

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  })

  return (
    <>
      <About />

      <ProjectsPC />

      {/* Mobile Projects Starts here */}
      <ProjectsMobile />
      {/* Mobile Projects Ends here */}


      <Skills />

      <Contact />
    </>

  )
}

export default App