import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsMobileGSAP = () => {
    gsap.matchMedia().add("(max-width: 960px)", () => {
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-m',
                start: 'top 90%',
                end: 'top 20%',
                // markers: true,
                // pinType: "transform",
                scrub: 2,
            }
        })

        tl3.from('.project1-m .my-skills-project-m img', {
            x: -300,
            stagger: {
                amount: 0.5,
                from: "random",
                axis: "x",
            }
        })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project2-m',
                start: 'top 90%',
                end: 'top 20%',
                // markers: true,
                // pinType: "transform",
                scrub: 2,
            }
        })

        tl4.from('.project2-m .my-skills-project-m img', {
            x: -300,
            stagger: {
                amount: 0.5,
                from: "random",
                axis: "x",
            }
        })

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project3-m',
                start: 'top 90%',
                end: 'top 20%',
                // markers: true,
                // pinType: "transform",
                scrub: 2,
            }
        })

        tl5.from('.project3-m .my-skills-project-m img', {
            x: -300,
            stagger: {
                amount: 0.5,
                from: "random",
                axis: "x",
            }
        })
    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}