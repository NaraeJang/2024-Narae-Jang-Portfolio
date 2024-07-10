import ProfilePhoto from '../../../assets/website_assets/naraejang-photo.webp';

//ShaderGradient
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

const GridNarae = () => {
  return (
    <div className="group col-span-4 row-span-6 rounded-2xl">
      <div className="flip-card-inner relative w-full h-full transition-transform group-hover:[transform:rotateY(180deg)]">
        <div className="bg-neutral-50 absolute flex flex-col w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] rounded-2xl p-8">
          <div className="grid-narae-wrapper h-auto">
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
          <p className="text-neutral-500 leading-normal mt-4">
            A Designer and Developer with three years of experience in Marketing
            and UI/UX. Plus Narae obtained + 13 certifications in UI/UX Design &
            Development.
          </p>
        </div>

        <div className="bg-neutral-900 absolute flex flex-col w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] rounded-2xl p-8 [transform:rotateY(180deg)]">
          <img
            src={ProfilePhoto}
            alt="narae jang profile photo"
            className="object-cover object-center w-44 h-44 mx-auto rounded-full"
          />

          <p className="text-neutral-200 leading-normal mt-4">
            My goal is not just to craft visually stunning graphics, but also to
            build meaningful connections with your audience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default GridNarae;
