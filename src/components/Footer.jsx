import { PiGithubLogo } from 'react-icons/pi';
import { RiLinkedinLine } from 'react-icons/ri';
import dayjs from 'dayjs';

const Footer = () => {
  const currentYear = dayjs().get('year');

  return (
    <footer className="px-[4%]">
      <section className="text-neutral-500  py-10 lg:py-12 rounded-2xl flex flex-row gap-4 w-full items-center justify-center bg-neutral-50">
        <a
          href="https://www.linkedin.com/in/naraejang0117"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
          <RiLinkedinLine className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/naraejang"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
          <PiGithubLogo className="w-6 h-6" />
        </a>
        <a
          href="https://drive.google.com/file/d/1u40opSKDyBVkq_N2Ilqzocx_vt-CiVJv/view"
          target="_blank"
          rel="noopener noreferrer">
          <span className="leading-none py-4 px-8 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
            Resume
          </span>
        </a>
      </section>

      <p className="text-center text-sm my-4 lg:my-5 text-neutral-300">
        &copy; 2023 - {currentYear} Narae Jang
      </p>
    </footer>
  );
};
export default Footer;
