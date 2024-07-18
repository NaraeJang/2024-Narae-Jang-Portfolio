import ProfilePhoto from '../../../assets/website_assets/naraejang-photo.webp';

//ShaderGradient
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

const GridNarae = () => {
  return (
    <div className="group md:col-span-4 md:row-span-6 rounded-2xl overflow-hidden">
      <div className="flip-card-inner relative w-full h-full transition-transform group-hover:[transform:rotateY(180deg)]">
        <div className="bg-neutral-50 absolute flex flex-col w-full md:justify-between h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] rounded-2xl p-8">
          <div className="grid-narae-wrapper h-1/2 md:h-full  max-h-[70%]">
            <ShaderGradientCanvas
              importedFiber={{ ...fiber, ...drei, ...reactSpring }}
              style={{
                pointerEvents: 'none',
              }}>
              <ShaderGradient
                animate="on"
                type="waterPlane"
                color1="#F4CC51"
                color2="#F51336"
                color3="#21078A"
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
                uSpeed={0.5}
                uStrength={4.4}
                uTime={0}
                wireframe={false}
              />
            </ShaderGradientCanvas>
          </div>
          <p className="narae-body-text text-neutral-500 leading-normal mt-4">
            A Designer and Developer with{' '}
            <span className="font-medium text-neutral-600">
              three years of experience in Marketing and UI/UX.
            </span>{' '}
            Plus, She is knowledgeable in{' '}
            <span className="font-medium text-neutral-600">
              Front-End Development.
            </span>
          </p>
        </div>

        <div className="bg-neutral-900 absolute flex flex-col md:justify-between w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] rounded-2xl p-8 [transform:rotateY(180deg)]">
          <img
            src={ProfilePhoto}
            alt="narae jang profile photo"
            className="object-cover object-center min-h-1/3 h-1/2 md:h-2/3 max-h-2/3 aspect-square mx-auto rounded-full"
          />

          <p className="narae-body-text text-neutral-200 leading-normal mt-4 w-full h-fit">
            My goal is not just to craft visually stunning graphics, but also to{' '}
            <span className="font-medium text-neutral-100">
              build meaningful connections with your audience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default GridNarae;
