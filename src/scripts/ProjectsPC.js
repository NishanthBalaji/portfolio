import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsPCGSAP = () => {
    gsap.matchMedia().add("(min-width: 1069px)", () => {

        //Horizontal Scroll
        gsap.to('.page2-for-pc section', {
            transform: 'translateX(-165%)',
            scrollTrigger: {
                trigger: ".page2-for-pc",
                scroller: "body",
                // markers: true,
                start: "top 0%",
                end: 'top -500%',
                scrub: 5,
                pin: true,
                pinSpacing: true,

            }
        })

        //3rd timeline
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.page2-for-pc',
                start: 'top 0%',
                end: 'top -500%',
                toggleActions: 'restart pause reverse none',
                // markers: true,
                scrub: 3,
            }
        })



        tl2.to('.page2-for-pc', {
            backgroundColor: 'white',
        })

        tl2.to('.page2-header', {
            color: 'black'
        }, '-=0.1')
    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}