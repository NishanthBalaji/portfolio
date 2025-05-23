import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutGSAP = () => {
    gsap.matchMedia().add("(max-width: 1096px)", () => {

        gsap.to('.my-img img', {
            scale: 1.125,
            repeat: -1,
            ease: 'power1.inOut',
            yoyo: true,
            duration: 4,
        }, '<')

        const tl = gsap.timeline();

        tl.fromTo('.about', {
            x: -1400,
            duration: 1,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1
        })
        tl.fromTo('.my-img', {
            x: 2500,
            duration: 1,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1
        }, '<')



        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'top 0%',
                end: 'top -100%',
                // markers: true,
                scrub: 2,
            }
        })

        tl1.fromTo('.about', {
            x: 0,
            opacity: 1
        }, {
            x: -400,
            y: -500,
            opacity: 0,
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.my-img img',
                start: 'top 0%',
                end: 'top -100%',
                // markers: true,
                scrub: 2,
            }
        })

        tl2.fromTo('.my-img', {
            x: 0,
            opacity: 1
        }, {
            x: 1000,
            y: -500,
            opacity: 0,
        })

        tl2.fromTo('.footer-name', {
            x: 0
        }, {
            x: 215,

        }, '<')
    })

    gsap.matchMedia().add("(min-width: 1069px)", () => {

        gsap.from('.my-img img', {
            scale: 1.125,
            repeat: -1,
            ease: 'power1.inOut',
            yoyo: true,
            duration: 4,
        }, '<')

        //1st timeline
        const initTL = gsap.timeline();

        initTL.fromTo('.about', {
            x: -1400,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
        }, '<');

        initTL.fromTo('.my-img', {
            x: 1500,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
        }, '<');

        //2nd timeline
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-img',
                start: 'top -10%',
                end: 'top -70%',
                // markers: true,
                scrub: 3,
            }
        });

        tl1.fromTo('.my-img', {
            x: 0,
            y: 0,
            opacity: 1,
        }, {
            x: 750,
            y: -250,
            opacity: 0,
        });

        tl1.fromTo('.about', {
            x: 0,
            y: 0,
            opacity: 1,
        }, {
            x: -750,
            y: -250,
            opacity: 0,
        }, '<')

        tl1.fromTo('.footer-name', {
            x: 0
        }, {
            x: '32.5vw',
            color: 'red'
        }, '<')


        tl1.fromTo('.page1', {
            backgroundColor: 'white'
        }, {
            backgroundColor: 'black',
            color: 'white'
        }, "<")

        tl1.fromTo('.page2-for-pc', {
            backgroundColor: 'white'
        }, {
            backgroundColor: 'black',
        }, "<")


        tl1.to('.page2-header', {
            color: 'white'
        }, '<')

        tl1.to('.footer-name', {
            scale: 2,
            x: '62.5%',
            y: -150,
            opacity: 0.7,
        });
    })

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}