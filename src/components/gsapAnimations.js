import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    bgchange(selector, trigger) {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: 'top center',
          end: 'bottom center',
          scrub: false,
          toggleActions: 'play reverse play reverse',
        },
        backgroundColor: '#262626', 
        color: '#FAFAF9',
        duration: 1,
        ease: 'power3.inOut',
      }); 
    },
    texttowhite(selector, trigger) {
      gsap.to(selector,  {
        scrollTrigger: {
            trigger: trigger,
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
        },
        color: '#FAFAF9', 
        duration: 1,
        ease: 'power3.inOut',
        });
    },
    nav(selector, trigger) {
      gsap.to(selector,  {
        scrollTrigger: {
            trigger: trigger,
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
        },
        backgroundColor: '#FAFAF9',
        color: '#262626',
        stroke: '#FAFAF9',
        duration: 1,
        ease: 'power3.inOut',

    });
    },
    animateupSTAGGER(selector, trigger){
      gsap.from(selector, {
        scrollTrigger:{
            trigger: trigger,
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play none none none',
        },
        y: 100, 
        opacity: 0,
        duration: 1, 
        stagger: 0.1, 
        ease: 'power3.inOut',
    });
    },
    animateup(selector, trigger){
      gsap.from(selector, {
        scrollTrigger:{
            trigger: trigger,
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play none none none',
        },
        y: 100, 
        opacity: 0,
        duration: 1, 
        ease: 'power4.inOut',
    });
    },
  },
};
