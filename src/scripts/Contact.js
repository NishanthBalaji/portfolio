import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactGSAP = () => {
    gsap.matchMedia().add("(max-width: 960px)", () => {

        const tl8 = gsap.timeline({
            scrollTrigger: {
                trigger: '.page4',
                start: 'top 75%',
                end: 'top 65%',
                // markers: true,
                scrub: 2,
            }
        })

        tl8.from('.contact-me a', {
            x: -300
        })

    })

    gsap.matchMedia().add("(min-width: 1069px)", () => {

        //6th timeline
        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 35%',
                end: 'top 16%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })

        tl5.from('.contact-me', {
            x: -200,
            duration: 1
        }, '<')

        tl5.from('.footer', {
            backgroundColor: 'white'
        }, '<')

        tl5.from('.footer .name', {
            color: 'black'
        }, '<')


    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}