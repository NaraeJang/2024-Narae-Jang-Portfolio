import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import HeroGrid from './HeroSection/HeroGrid';

//ShaderGradient
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // 3D ANIMATION ON MOUSE MOVE
    const wrapper = document.getElementById('hero-hidden-element-wrapper');
    const mouse = { x: 0, y: 0 };
    let tween;

    const handleMouseMove = (e) => {
      const multiplier = 10.0;
      const y = ((e.clientY / window.innerHeight) * 2 - 1) * multiplier;
      const x = ((e.clientX / window.innerWidth) * 2 - 1) * multiplier;

      tween = gsap.to(mouse, {
        x: x,
        y: y,
        duration: 1,
        onUpdate: () => {
          wrapper.style.transform = `rotateX(${-mouse.y}deg) rotateY(${
            mouse.x
          }deg)`;
        },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // REVEALING ANIMATION
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '#g-pin',
        toggleActions: '',
        start: 'top bottom-=25%',
        end: 'bottom top+=25%',
        scrub: 1,
        markers: false,
      },
    });

    tl.to('#g-hero-hidden-element', {
      clipPath: 'circle(100% at 50% 50%)',
      stagger: 1,
    });

    gsap.to('#g-scroll-container', {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <section id="g-hero-container" className="relative h-[200svh] w-svw">
      <div className="g-element-container absolute top-0 left-0 h-[230svh] w-full px-[4%]">
        <HeroGrid />

        <div id="g-pin" className="z-20">
          {/* <p>element</p> */}
        </div>
      </div>

      <div
        id="g-hero-hidden-element"
        className="sticky top-0 left-0 z-10 h-[130svh] clip-path-hero flex justify-center items-start w-full px-[4%] bg-black">
        <div
          id="hero-hidden-element-wrapper"
          className="w-full text-left md:text-center px-4 z-10 text-[#ffec70] h-svh grid place-items-center relative">
          <div className="sticky">
            <h1 className="text-balance w-full mx-auto font-title text-5xl md:text-7xl xl:text-[5rem] leading-tight lg:leading-[1.25] tracking-tighter max-w-5xl">
              It's all about{' '}
              <span className="font-dm-serif tracking-tighter italic  md:text-[5rem] xl:text-[5.25rem]">
                insight, strategy, exploration,
              </span>{' '}
              and{' '}
              <span className="font-dm-serif tracking-tighter italic  md:text-[5rem] xl:text-[5.25rem]">
                imagination
              </span>{' '}
              that forms my creative process.
            </h1>
            <p className="text-lg leading-relaxed mt-6 md:mt-8 max-w-xl lg:max-w-5xl mx-auto">
              I believe that having a clear purpose behind an idea can lead to
              outstanding results.
              <br />{' '}
              <span className="hidden md:block">
                When it comes to design, I focus on conveying the right message
                to engage the targeted customers.
              </span>
            </p>
          </div>
        </div>

        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}>
          {/* <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3.95&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=c3e4ff&color2=eae2ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
          /> */}
          <ShaderGradient
            animate="on"
            type="waterPlane"
            color1="#8BA1B2"
            color2="#C14F4D"
            color3="#B47448"
            grain="off"
            cAzimuthAngle={180}
            cDistance={3}
            cPolarAngle={50}
            cameraZoom={1}
            lightType="3d"
            positionX={0.4}
            positionY={0.9}
            positionZ={0.3}
            reflection={0.1}
            envPreset="city"
            rotationX={50}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            uDensity={1.8}
            uAmplitude={0}
            uFrequency={0}
            uSpeed={0.3}
            uStrength={4.4}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
    </section>
  );
};
export default Hero;
//       brightness={3.95}
