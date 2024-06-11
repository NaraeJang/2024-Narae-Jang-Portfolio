import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

//ShaderGradient
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
        toggleActions: 'restart none reverse reset',
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
      <div className="g-element-container absolute top-0 left-0 h-[200svh] w-full">
        <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full">
          <div className="w-full md:max-w-3xl text-center px-4">
            <h1 className="w-full md:max-w-xl mx-auto font-title uppercase text-5xl md:text-[5rem] text-black leading-tight">
              Transforming ideas into reality
            </h1>
            <p className="text-lg leading-relaxed">
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
        className="sticky top-0 left-0 z-10 h-svh clip-path-hero flex justify-center items-center w-svw bg-black text-white">
        <div className="max-w-3xl text-center z-10">
          <h1 className="max-w-xl mx-auto font-title uppercase text-[5rem] text-white leading-tight">
            Transforming ideas into reality
          </h1>
          <p className="text-lg leading-relaxed">
            My expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </p>
        </div>

        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          zoomOut={false}
          cDistance={1}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}>
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3.5&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff6a00&color2=%23dbba95&color3=%23adb2e1&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=3.8&uTime=0&wireframe=false&zoomOut=false"
          />
        </ShaderGradientCanvas>
      </div>
    </section>
  );
};
export default Hero;
