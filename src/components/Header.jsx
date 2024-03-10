import Spline from '@splinetool/react-spline';

const Header = () => {
  // useEffect(() => {
  //   const shadowRoot = document.querySelector('spline-viewer').shadowRoot;

  //   if (shadowRoot) {
  //     shadowRoot?.querySelector('#logo').remove();
  //   }
  // }, []);

  return (
    <div className="w-full h-[90vh] h-[90svh] md:h-screen relative">
      <div className="absolute heading-container">
        <h1>Bringing Design Vision to Life Through Code.</h1>
        <p>
          3 years of design experience, now coding to elevate digital
          experiences. Crafting seamless interfaces by bridging design and tech
          collaboratively.
        </p>
      </div>
      <div className=" absolute bg-black/15 w-full h-full"></div>
      {/* <Spline scene="https://prod.spline.design/D726QFNsxJlXYBml/scene.splinecode" /> */}
    </div>
  );
};
export default Header;
