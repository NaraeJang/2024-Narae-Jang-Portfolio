import { useEffect } from 'react';
import { Loading } from '../';
import {
  GanaDesignProcess,
  GanaTitle,
  GanaToPainPoint,
  GanaJourneyPaper,
  GanaDigitalToLowFidelity,
  GanaUsabilityToMockUp,
  GanaHighFidelity,
  GanaBookingFlow,
  GanaDesignSystem,
  GanaAccessibilityTakeaways,
} from './gamadara/';

const Ganadara = () => {
  useEffect(() => {
    const imgs = document.querySelectorAll('img[data-enlargable]');
    imgs.forEach((img) => {
      img.classList.add('img-enlargable');
    });

    const handleClick = function () {
      const src = this.getAttribute('src');
      const enlargedDiv = document.createElement('div');
      enlargedDiv.style.cssText = `
        background: RGBA(0,0,0,.8) url(${src}) no-repeat center;
        background-size: contain;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        cursor: zoom-out;
      `;
      enlargedDiv.addEventListener('click', function () {
        this.remove();
      });
      document.body.appendChild(enlargedDiv);
    };

    imgs.forEach((img) => {
      img.addEventListener('click', handleClick);
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <main id="ganadara" className="relative">
      {/* <Loading /> */}
      <div className="hero" id="gana-hero"></div>
      <div className="max-w-[2560px] mx-auto">
        <GanaTitle />
        <GanaDesignProcess />
        <GanaToPainPoint />
        <GanaJourneyPaper />
        <GanaDigitalToLowFidelity />
        <GanaUsabilityToMockUp />
        <GanaBookingFlow />
        <GanaHighFidelity />
        <GanaDesignSystem />
        <GanaAccessibilityTakeaways />
      </div>
    </main>
  );
};
export default Ganadara;
