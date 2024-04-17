import dayjs from 'dayjs';
import { footerNav } from '../data/footerNavbar';
import { FaRegCopy } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = dayjs().get('year');
  const [copySuccessMessage, setCopySuccessMessage] = useState('');
  const isMobile = window.innerWidth < 768;

  const email = 'naraejang0117@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} copied to clipboard`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  return (
    <footer id="footer" className=" bg-primary-600">
      <hr className="border-primary-400" />
      <div className="custom-container text-left flex flex-col gap-20 xl:flex-row justify-between">
        <div className="contact-container">
          <div
            className="email flex flex-row gap-4 relative"
            onClick={copyEmail}>
            {/* <FaRegCopy /> */}
            <p className="out-link dt-black text-4xl w-[100%] md:text-4xl lg:text-5xl hover:translate-y-[-2px] no-underline">
              naraejang0117@gmail.com
            </p>
            {copySuccessMessage && (
              <p className="absolute clipboard-msg">
                Successfully copied the email!
              </p>
            )}
          </div>
          {!isMobile && (
            <p className="mt-0 mb-10 ">
              &copy; 2023 - {currentYear} Narae Jang
            </p>
          )}
        </div>

        <div className="flex flex-col gap-20  md:flex-row">
          <div>
            <h5 className="poppins-semibold leading-loose mb-4">location</h5>
            <p>Montreal, Quebec, Canada</p>
          </div>

          <div className="flex flex-col">
            <h5 className="poppins-semibold leading-loose mb-4">Socials</h5>
            <nav className="flex flex-col gap-1">
              {footerNav.map((project) => {
                return (
                  <a
                    key={project.id}
                    target="_blank"
                    href={project.gitLink}
                    className="footer-link">
                    {project.title}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {isMobile && (
        <p className="mt-0 pb-10 text-left md:text-center w-[90%] mx-auto">
          &copy; 2023 - {currentYear} Narae Jang
        </p>
      )}
    </footer>
  );
};
export default Footer;
