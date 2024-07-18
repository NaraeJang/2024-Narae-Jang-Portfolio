import React, { useEffect } from 'react';
import SplitType from 'split-type';
import Matter from 'matter-js';

const GridComponentOfMe = () => {
  useEffect(() => {
    const splitWords = () => {
      // Split text into words using SplitType
      const textNode = document.querySelector('.component-second-container');

      if (!textNode) return;

      const split = new SplitType(textNode, { types: 'words' });

      const words = split.words;

      words.forEach((word) => {
        const highlighted =
          word.innerText === `notyet` ||
          word.innerText === `CTO` ||
          word.innerText === `Mythrill`;
        if (highlighted) {
          word.classList.add('highlighted');
        }
        word.classList.add('word');
      });
    };

    // Function to render Matter.js physics
    const renderCanvas = () => {
      const container = document.querySelector('.component-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      const Runner = Matter.Runner;

      const params = {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      };

      const engine = Engine.create({});
      const render = Render.create({
        element: container,
        engine: engine,
        options: {
          width: containerRect.width,
          height: containerRect.height,
          background: 'transparent',
          wireframes: false,
        },
      });

      const floor = Bodies.rectangle(
        containerRect.width / 2,
        containerRect.height,
        containerRect.width,
        50,
        params
      );
      const wall1 = Bodies.rectangle(
        0,
        containerRect.height / 2,
        50,
        containerRect.height,
        params
      );
      const wall2 = Bodies.rectangle(
        containerRect.width,
        containerRect.height / 2,
        50,
        containerRect.height,
        params
      );
      const top = Bodies.rectangle(
        containerRect.width / 2,
        0,
        containerRect.width,
        50,
        params
      );

      // Query for .word elements inside the renderCanvas function
      const wordElements = container.querySelectorAll('.word');
      const wordBodies = [...wordElements].map((elemRef) => {
        const width = elemRef.offsetWidth;
        const height = elemRef.offsetHeight;

        const xPosition = Math.random() * (containerRect.width - 100) + 50; // Starting from 50 to width - 50
        const yPosition = Math.random() * (containerRect.height - 100) + 50; // Starting from 50 to height - 50

        return {
          body: Bodies.rectangle(xPosition, yPosition, width, height, {
            render: {
              fillStyle: 'transparent',
            },
          }),
          elem: elemRef,
          render() {
            const { x, y } = this.body.position;
            this.elem.style.top = `${y - height / 2}px`; // Adjust positioning relative to height
            this.elem.style.left = `${x - width / 2}px`;
            this.elem.style.transform = `rotate(${this.body.angle}rad)`;
          },
        };
      });

      const mouse = Matter.Mouse.create(container);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
      mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
      mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

      World.add(engine.world, [
        floor,
        ...wordBodies.map((box) => box.body),
        wall1,
        wall2,
        top,
        mouseConstraint,
      ]);
      render.mouse = mouse;
      Runner.run(engine);
      Render.run(render);

      // Rerender function
      (function rerender() {
        wordBodies.forEach((element) => {
          element.render();
        });
        Matter.Engine.update(engine);
        requestAnimationFrame(rerender);
      })();

      // Return cleanup function to remove old words
      return () => {
        wordElements.forEach((word) => {
          word.classList.remove('highlighted');
          word.classList.remove('word');
        });
      };
    };

    // Call functions on mount
    splitWords();
    renderCanvas();

    // Clean up on unmount (optional, if you need to clean up resources)
    return () => {
      // Perform any cleanup here if necessary
    };
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div className="hidden invisible md:block md:visible col-span-3 row-span-8 bg-neutral-900 rounded-2xl relative overflow-hidden">
      <p className="absolute top-0 left-0 m-6 font-title uppercase text-neutral-50 hero-title">
        components of me
      </p>
      <div className="relative w-full h-full component-container">
        <div className="component-second-container">
          Curiosity Creativity Continuous-Learning Consistency Adventurous
          Honest Problem-Solving Attention-to-Detail Adaptability Passion
        </div>
      </div>
    </div>
  );
};
export default GridComponentOfMe;
