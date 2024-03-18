import { gsap } from 'gsap';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { useHomeContext } from './HomeLayout';

const Loading = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      ['#title-1', '#title-2', '#title-3'],
      {
        opacity: 0,
        x: '-=30',
      },
      {
        opacity: 1,
        x: '0',
        stagger: 0.5,
      }
    )
      .to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',

        delay: 0.5,
      })
      .fromTo(
        '#intro-slider',
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          yPercent: '-100',
          opacity: 0.5,
          duration: 0.5,
        }
      );
  }, []);

  return (
    <>
      <div
        id="intro-slider"
        className="h-screen w-screen p-0 md:p-10 fixed top-0 left-0 dt-black capitalize  grid place-content-center flex-col md:flex-row gap-5 tracking-tight text-left md:text-center ">
        <h3
          className="leading-normal text-4xl md:text-6xl lg:text-8xl uppercase loading-header"
          id="title-1">
          Developer
        </h3>
        <h3
          className="leading-normal text-4xl md:text-6xl lg:text-8xl uppercase loading-header"
          id="title-2">
          Designer
        </h3>
        <h3
          className="leading-normal text-4xl md:text-6xl lg:text-8xl uppercase loading-header"
          id="title-3">
          Narae Jang
        </h3>
      </div>
    </>
  );
};
export default Loading;
