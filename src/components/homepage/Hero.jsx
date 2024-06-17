import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

//ShaderGradient
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // REVEALING ANIMATION
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '#g-pin',
        toggleActions: 'play none none reset',
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
  }, []);

  return (
    <section id="g-hero-container" className="relative h-[200svh] w-svw">
      <div className="g-element-container absolute top-0 left-0 h-[200svh] w-full px-[4%]">
        <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full">
          <div className="w-full md:max-w-3xl text-center px-4">
            <h1 className="w-full md:max-w-xl mx-auto font-title uppercase text-5xl md:text-[5rem] text-black leading-tight">
              Transforming ideas into reality
            </h1>
            <p className="text-lg leading-relaxed mt-4 md:mt-0">
              My expertise encompasses branding, logo design, publication
              design, digital marketing, UI/UX, and development, forging new
              paths into the digital landscape.
            </p>
          </div>
        </div>

        <div id="g-pin" className="z-20">
          {/* <p>element</p> */}
        </div>
      </div>

      <div
        id="g-hero-hidden-element"
        className="sticky top-0 left-0 z-10 h-svh clip-path-hero flex justify-center items-center w-full px-[4%] bg-black text-white">
        <div className="w-full md:max-w-3xl text-center px-4 z-10">
          <h1 className="w-full md:max-w-xl mx-auto font-title uppercase text-5xl md:text-[5rem] text-white leading-tight text-stroke-1">
            Transforming{' '}
            <spa className="font-dm-serif tracking-tighter capitalize italic md:text-[5.25rem]">
              ideas
            </spa>{' '}
            into{' '}
            <span className="font-dm-serif tracking-tighter capitalize italic md:text-[5.25rem]">
              reality
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-stroke-1  mt-4 md:mt-0">
            My expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </p>
        </div>

        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}>
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3.95&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=c3e4ff&color2=eae2ff&color3=%23ffffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>
    </section>
  );
};
export default Hero;
