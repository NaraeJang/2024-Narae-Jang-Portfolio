import { Link } from 'react-router-dom';
import { Cursor } from './';
import { useState, useEffect } from 'react';

const Error = () => {
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowCursor(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {shouldShowCursor && <Cursor />}
      <section id="error-page">
        <div className="custom-container h-[100vh] h-[100svh]">
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="dt-black text-[6.25rem] leading-none text-[#4637d1]">
              404
            </h3>
            <h3 className="dt-black text-[5rem] leading-none text-[#4637d1]">
              page
            </h3>
            <p className="pt-10 pb-6 w-[80%]">
              Opps! It seems like you&apos;re in the wrong page.{' '}
            </p>
            <Link to="./" className="btn btn-secondary inline-block">
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Error;
