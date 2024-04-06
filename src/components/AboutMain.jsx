import {
  AboutMainLicense,
  AboutMainMe,
  AboutMainSchool,
  AboutMainWork,
} from './';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutMain = () => {
  useEffect(() => {
    if (window.innerWidth < 2000) {
      gsap.to('#about-work', {
        scrollTrigger: {
          trigger: '#about-work',
          start: 'top 90%',
          end: 'top 70%',
          scrub: true,
        },
        opacity: 1,
        y: 0,
      });

      gsap.to('.about-education-title', {
        scrollTrigger: {
          trigger: '.about-education-title',
          start: 'top 80%',
          end: 'top 65%',
          scrub: true,
        },
        opacity: 1,
        x: 0,
      });

      gsap.to('.about-school-card', {
        scrollTrigger: {
          trigger: '.about-school-card',
          start: 'top 90%',
          end: 'top 70%',
          scrub: true,
        },
        opacity: 1,
        y: '0px',
        stagger: 0.2,
      });

      gsap.to('.about-license-title', {
        scrollTrigger: {
          trigger: '.about-license-title',
          start: 'top 80%',
          end: 'top 65%',
          scrub: true,
        },
        opacity: 1,
        x: 0,
      });

      gsap.to('.about-license-card', {
        scrollTrigger: {
          trigger: '.about-license-card',
          start: 'top 90%',
          end: 'top 70%',
          scrub: true,
        },
        opacity: 1,
        y: '0px',
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <div>
      <AboutMainMe /> <AboutMainWork /> <AboutMainSchool /> <AboutMainLicense />
    </div>
  );
};
export default AboutMain;
