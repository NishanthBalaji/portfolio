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
            x: 500
        }, {
            x: 0
        })

        tl6.fromTo('.my-text p', {
            x: -1000,
        }, {
            x: 0
        }, '<')

        const skillEntryMobile = gsap.timeline({
            scrollTrigger: {
                trigger: '.my-text',
                start: 'top 35%',
                end: 'top 5%',
                // markers: true,
                scrub: true,
            }
        })

        skillEntryMobile.fromTo('.my-skills img', {
            x: 500,
        }, {
            x: 0,
            duration: 1,
            stagger: {
                amount: 15
            }
        })
    })

    gsap.matchMedia().add("(min-width: 1069px)", () => {

        //4th timeline
        const skillEntryPCText = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'top 70%',
                end: 'top 10%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })

        skillEntryPCText.from('.my-text', {
            x: -710,
        })

        const skillEntryPCLogo = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'top 70%',
                end: 'top 10%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: true,
            }
        })

        skillEntryPCLogo.fromTo('.my-skills img', {
            x: 710,
        }, {
            x: 0,
            duration: 1,
            stagger: {
                amount: 1
            }
        })


        //5th timeline
        const skillExitPCText = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'bottom 70%',
                end: 'bottom 0%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })

        skillExitPCText.to('.my-text', {
            x: -710,
            duration: 4,
        })

        const skillExitPCLogo = gsap.timeline({
            scrollTrigger: {
                trigger: '.page3',
                start: 'bottom 70%',
                end: 'bottom 0%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: true,
            }
        })

        skillExitPCLogo.to('.my-skills img', {
            x: 710,
            duration: 1,
            stagger: {
                amount: 0.5,
            }
        })

    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}