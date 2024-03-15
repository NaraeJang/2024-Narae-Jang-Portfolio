import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';

  document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  });

  return (
    <div
      className="w-full h-[90vh] h-[90svh] md:h-screen 2xl:max-h-[60vh] 2xl:max-h-[60svh] relative"
      id="header">
      <div className="absolute heading-container">
        <h1>Bringing Design to Life Through Code.</h1>
        <p>
          3 years of design experience, now coding to elevate digital
          experiences. Crafting seamless interfaces while bridging the gap
          between design and tech.
        </p>
      </div>
      {/* <div className=" absolute bg-black/15 w-full h-full"></div> */}
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      {/* <Spline scene="https://prod.spline.design/D726QFNsxJlXYBml/scene.splinecode" /> */}
    </div>
  );
};
export default Header;
