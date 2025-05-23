import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsGSAP = () => {
    gsap.matchMedia().add("(max-width: 1068px)", () => {

        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.my-text',
                start: 'top 100%',
                end: 'top 50%',
                // markers: true,
                scrub: 5,

            }
        })

        tl6.fromTo('.my-text h2', {
            x: -500
        }, {
            x: 0
        })

        tl6.fromTo('.my-text p', {
            x: -500,
        }, {
            x: 0
        })

        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: '.my-text',
                start: 'top 20%',
                end: 'top 5%',
                // markers: true,
                scrub: 2,
            }
        })

        tl7.from('.my-skills img', {
            x: 1000,
            // duration: 1,
            stagger: {
                amount: 0.5,
                from: "edge",
                axis: "x",
                // each: 5
            }
        })
    })

    gsap.matchMedia().add("(min-width: 1069px)", () => {

        //4th timeline
        const skillEntryPC = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'top 70%',
                end: 'top 10%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })

        skillEntryPC.from('.my-text', {
            x: -710,
        })

        skillEntryPC.from('.my-skills', {
            x: 710,
        }, '<')


        //5th timeline
        const skillExitPC = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'bottom 70%',
                end: 'bottom 0%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })

        skillExitPC.to('.my-text', {
            x: -710,
            duration: 4,
        })

        skillExitPC.to('.my-skills', {
            x: 710,
            duration: 4,
        }, '<')

    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}