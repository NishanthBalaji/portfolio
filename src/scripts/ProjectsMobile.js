import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsMobileGSAP = () => {
    gsap.matchMedia().add("(max-width: 960px)", () => {
        const project1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project1-m',
                start: 'top 75%',
                end: 'top 50%',
                // markers: true,
                scrub: true,
            }
        })

        project1.fromTo('.project1-m .my-skills-project-m img', {
            y: -200,
            x: -800

        }, {
            y: 0,
            x: 0,
            duration: 50,
            stagger: {
                amount: 30
            }
        })

        const project2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project2-m',
                start: 'top 85%',
                end: 'top 50%',
                // markers: true,
                scrub: true,
            }
        })

        project2.fromTo('.project2-m .my-skills-project-m img', {
            y: -200,
            x: 800

        }, {
            y: 0,
            x: 0,
            duration: 50,
            stagger: {
                amount: 30,
            }
        })

        const project3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project3-m',
                start: 'top 85%',
                end: 'top 50%',
                // markers: true,
                scrub: true,
            }
        })

        project3.fromTo('.project3-m .my-skills-project-m img', {
            y: -200,
            x: -800

        }, {
            y: 0,
            x: 0,
            duration: 50,
            stagger: {
                amount: 30
            }
        })

    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}