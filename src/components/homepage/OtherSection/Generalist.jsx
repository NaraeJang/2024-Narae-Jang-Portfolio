import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useHomeContext } from '../Home';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Generalist = () => {
  const { currentWorkCategory } = useHomeContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [copySuccessMessage, setCopySuccessMessage] = useState('');

  const email = 'naraejang0117@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard`);
  };

  // EMAIL MESSAGE TIME OUT
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  //REFRESH SCROLL TRIGGER
  useEffect(() => {
    // Ensure DOM elements exist before initializing GSAP animations
    const fetchWorkSectionHeight = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    };
    fetchWorkSectionHeight();
  }, [currentWorkCategory]);

  useEffect(() => {
    // GSAP TEXT ANIMATION IN GENERALIST
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((words, i) => {
      const text = new SplitType(words, {
        types: 'words',
      });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: words,
          start: 'top bottom-=30%',
          end: 'top top+=25%',
          scrub: 1,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // GSAP JOURNEY SECTION DISAPPEAR ANIMATION
    gsap.to('#g-journey-section', {
      scrollTrigger: {
        trigger: '#g-generalist-section',
        scrub: 1,
        start: 'top bottom-=20%',
        end: 'top bottom-=25%',
        markers: false,
      },
      opacity: 0,
    });

    // GSAP BG COLOR CHANGE ANIMATION
    gsap.to('.g-bg-manipulator', {
      scrollTrigger: {
        trigger: '#g-generalist-section',
        toggleActions: 'restart none none reset',
        scrub: 1,
        start: 'top bottom-=20%',
        end: 'top bottom-=30%',
        markers: false,
      },
      backgroundColor: '#ffffff',
    });

    gsap.to('.g-generalist-email', {
      scrollTrigger: {
        trigger: '.g-generalist-email',
        scrub: 1,
        markers: false,
        start: 'top bottom-=20%',
        end: 'top bottom-=22%',
      },
      opacity: 1,
    });
  }, [currentWorkCategory]); // Ensure GSAP animations update when category changes

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="min-h-[80vh] md:min-h-fit lg:h-max my-28 md:my-40 lg:mt-56 lg:mb-56 2xl:min-h-[50vh] px-[4%] w-svw">
      <div id="g-generalist-section" className="grid place-items-center">
        <div className="w-full">
          {windowWidth < 448 ? (
            <h1 className="text-left reveal-type text-neutral-900 font-title text-[2.5rem] leading-normal tracking-tight">
              I’m a{' '}
              <span className="gradient-word-generalist">
                passionate generalist
              </span>{' '}
              who enjoys the{' '}
              <span className="font-dm-serif italic tracking-tighter">
                variety
              </span>{' '}
              <span className="font-dm-serif italic tracking-tighter">of</span>{' '}
              <span className="font-dm-serif italic tracking-tighter">
                jobs
              </span>{' '}
              that I get to do. which isn’t categorical, but{' '}
              <span className="font-dm-serif italic transition-colors">
                situational
              </span>
              . I can be a graphic designer, UI designer, and front-end
              developer.
            </h1>
          ) : (
            <h1 className="text-center reveal-type max-w-5xl mx-auto text-balance text-neutral-800 font-title text-4xl md:text-5xl xl:text-6xl xl:leading-normal leading-normal md:leading-normal lg:leading-normal lg:tracking-tight">
              I’m a{' '}
              <span className="gradient-word-generalist transition-all">
                passionate generalist
              </span>{' '}
              who{' '}
              <span className="font-dm-serif italic hover:text-[#85A4FF] transition-colors tracking-tight">
                enjoys the variety of jobs
              </span>{' '}
              {windowWidth > 700 && windowWidth < 830 ? <br /> : ' '}
              that I get to do. which isn’t categorical, but{' '}
              <span className="font-dm-serif italic hover:text-[#64B5F4] transition-colors tracking-tight">
                situational
              </span>
              . I can be a graphic designer, UI designer, and front-end
              developer.
            </h1>
          )}
        </div>
      </div>
      <div className="opacity-0 g-generalist-email mt-4 lg:mt-10 text-lg text-left md:text-center">
        {windowWidth < 448 ? (
          <h5>
            Are you looking for generalist?
            <br />
            Let's have a coffee chat. 🙂
          </h5>
        ) : (
          <h5>Are you looking for generalist? Let's have a coffee chat. 🙂</h5>
        )}

        <button
          className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700"
          onClick={copyEmail}>
          Copy my Email
        </button>
        <p
          className={`opacity-0 text-sm mt-2 text-blue-400 transition-opacity ${
            copySuccessMessage && `opacity-100`
          }`}>
          All set! Can't wait to talk to you soon.
        </p>
      </div>
    </section>
  );
};

export default Generalist;
