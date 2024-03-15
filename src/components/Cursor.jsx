import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cursor = () => {
  const location = useLocation();

  const getBrowserPrefix = () => {
    const usrAg = navigator.userAgent;
    if (usrAg.indexOf('Chrome') > -1 || usrAg.indexOf('Safari') > -1) {
      return '-webkit-';
    } else if (usrAg.indexOf('Opera') > -1) {
      return '-o';
    } else if (usrAg.indexOf('Firefox') > -1) {
      return '-moz-';
    } else if (usrAg.indexOf('MSIE') > -1) {
      return '-ms-';
    } else {
      return '';
    }
  };

  useEffect(() => {
    const browserPrefix = getBrowserPrefix();
    const cursor = document.getElementById('js-cursor');
    const cursorBig = document.getElementById('js-cursor__big');
    const links = document.querySelectorAll(
      'a, button, .work-pill, .btn, .link, .footer-link ,.email'
    );

    const handleMouseMove = (e) => {
      cursor.style[
        browserPrefix + 'transform'
      ] = `translate(${e.pageX}px, ${e.pageY}px)`;
    };

    const handleLinkEnter = () => {
      cursorBig.style[browserPrefix + 'transform'] = 'scale(1)';
    };

    const handleLinkLeave = () => {
      cursorBig.style[browserPrefix + 'transform'] = 'scale(0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkEnter);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div className="custom-cursor" id="js-cursor">
      <div className="cursor__small abs-center"></div>
      <div className="cursor__big abs-center" id="js-cursor__big"></div>
    </div>
  );
};

export default Cursor;
