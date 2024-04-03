import dayjs from 'dayjs';
import { footerNav } from '../data/data';
import { FaRegCopy } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = dayjs().get('year');
  const [copySuccessMessage, setCopySuccessMessage] = useState('');

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
    <footer id="footer">
      <div className="custom-container text-left flex flex-col gap-20 lg:flex-row justify-between">
        <div className="contact-container">
          <div
            className="email flex flex-row gap-4 relative"
            onClick={copyEmail}>
            <FaRegCopy />
            <p className="out-link dt-black text-lg hover:translate-y-[-2px]">
              naraejang0117@gmail.com
            </p>
            {copySuccessMessage && (
              <p className="absolute clipboard-msg">
                Successfully copied the email!
              </p>
            )}
          </div>
          <p>
            You can also find me on{' '}
            <a
              target="_blank"
              href="https://github.com/NaraeJang"
              className="out-link poppins-semibold hover:underline">
              Github
            </a>
            , and{' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/naraejang0117"
              className="out-link poppins-semibold hover:underline">
              LinkedIn.
            </a>
          </p>
          <p>&copy; 2023 - {currentYear} Narae Jang</p>
        </div>

        <div className="flex flex-col gap-20  lg:flex-row ">
          <div>
            <h5 className="poppins-semibold leading-loose">location</h5>
            <p>Montreal, Quebec, Canada</p>
          </div>

          <div className="flex flex-col">
            <h5 className="poppins-semibold leading-loose">Projects</h5>
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
    </footer>
  );
};
export default Footer;
