import { useEffect } from 'react';

const HomeAboutScroll = ({
  extraClass = '',
  list,
  dataDirection,
  dataSpeed,
  keyname,
}) => {
  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true);

      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const scrollers = document.querySelectorAll('.scroller');
      addAnimation(scrollers);
    }
  }, []);

  return (
    <div
      className={`scroller ${extraClass}`}
      data-direction={dataDirection}
      data-speed={dataSpeed}>
      <ul className="tag-list scroller__inner">
        {list.map((item, i) => (
          <li key={keyname + i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default HomeAboutScroll;
