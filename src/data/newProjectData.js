import { nanoid } from 'nanoid';

import GanaBC from '../assets/newItemThumbs/GanaBC.webp';
import GanaMenu01 from '../assets/newItemThumbs/GanaMenu01.webp';
import GanaMenu02 from '../assets/newItemThumbs/GanaMenu02.webp';
import GanaMenu03 from '../assets/newItemThumbs/GanaMenu03.webp';
import GanaMenu04 from '../assets/newItemThumbs/GanaMenu04.webp';
import Jobmate from '../assets/newItemThumbs/Jobmate.webp';
import EW01 from '../assets/newItemThumbs/EW01.webp';
import EW02 from '../assets/newItemThumbs/EW02.webp';
import EW03 from '../assets/newItemThumbs/EW03.webp';
import EW04 from '../assets/newItemThumbs/EW04.webp';
import GanaApp01 from '../assets/newItemThumbs/Gana_app01.webp';
import GanaApp02 from '../assets/newItemThumbs/Gana_app02.webp';
import Han01 from '../assets/newItemThumbs/HanInternational01.webp';
import Han02 from '../assets/newItemThumbs/HanInternational02.webp';
import Han03 from '../assets/newItemThumbs/HanInternational03.webp';
import Han04 from '../assets/newItemThumbs/HanInternational04.webp';
import Han05 from '../assets/newItemThumbs/HanInternational05.webp';
import Han06 from '../assets/newItemThumbs/HanInternational06.webp';
import Han07 from '../assets/newItemThumbs/HanInternational07.webp';
import Han08 from '../assets/newItemThumbs/HanInternational08.webp';
import Han09 from '../assets/newItemThumbs/HanInternational09.webp';
import Han10 from '../assets/newItemThumbs/HanInternational10.webp';
import Han11 from '../assets/newItemThumbs/HanInternational11.webp';
import Jako from '../assets/newItemThumbs/Jako_Logo.webp';
import Rk from '../assets/newItemThumbs/RK_Logo.webp';
import Candle from '../assets/newItemThumbs/Candle.webp';
import Arcade01 from '../assets/newItemThumbs/Arcade1Up01.webp';
import Arcade02 from '../assets/newItemThumbs/Arcade1Up02.webp';
import GaDi01 from '../assets/newItemThumbs/GabrielDigital01.webp';
import GaDi02 from '../assets/newItemThumbs/GabrielDigital02.webp';
import GaDi03 from '../assets/newItemThumbs/GabrielDigital03.webp';
import GaPr from '../assets/newItemThumbs/GabrielPrint.webp';
import GaVi from '../assets/newItemThumbs/GabrielVideo.webp';
import Narae from '../assets/newItemThumbs/Narae.webp';
import CalegoB2C from '../assets/newItemThumbs/RedesigningB2C.webp';
import Wegic from '../assets/newItemThumbs/Wegic.webp';
import Vacay01 from '../assets/newItemThumbs/Vacay01.webp';
import Vacay02 from '../assets/newItemThumbs/Vacay02.webp';
import Vacay03 from '../assets/newItemThumbs/Vacay03.webp';
import Vacay04 from '../assets/newItemThumbs/Vacay04.webp';
import Vacay05 from '../assets/newItemThumbs/Vacay05.webp';
import Vacay06 from '../assets/newItemThumbs/Vacay06.webp';
import Vacay07 from '../assets/newItemThumbs/Vacay07.webp';
import Vacay08 from '../assets/newItemThumbs/Vacay08.webp';
import Vacay09 from '../assets/newItemThumbs/Vacay09.webp';
import Vacay10 from '../assets/newItemThumbs/Vacay10.webp';
import Vacay11 from '../assets/newItemThumbs/Vacay11.webp';
import Vacay12 from '../assets/newItemThumbs/Vacay12.webp';
import Vacay13 from '../assets/newItemThumbs/Vacay13.webp';
import Vacay14 from '../assets/newItemThumbs/Vacay14.webp';
import GaBa01 from '../assets/newItemThumbs/Ga_Banner01.webp';
import GaBa02 from '../assets/newItemThumbs/Ga_Banner02.webp';
import GaBa03 from '../assets/newItemThumbs/Ga_Banner03.webp';
import CaDi01 from '../assets/newItemThumbs/Ca_Di01.gif';
import CaDi02 from '../assets/newItemThumbs/Ca_Di02.gif';
import DigitalMarketingWebp from '../assets/projects-images/Calego.webp';

export const projectsData = [
  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
    img: [Jobmate],
    imgAlt: 'JobMate',
    title: 'Job Tracking Web Application',
    keyword: `MERN | MongoDB | Express | React | NodeJS | Style components | UI Design `,
    livePath: 'https://jobmate-1gpn.onrender.com/',
    internalPath: null,
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    category: ['ui/ux'],
    img: [GanaApp01, GanaApp02],
    imgAlt: 'Ganadara App',
    title: 'Bar Ganadara Booking App',
    keyword: `UI/UX Design | Competitive Analysis | Persona | User Journey Map | User Flow | Sitemap | Usability Study | Wireframing | Prototyping | Case Study`,
    livePath: null,
    internalPath: './ganadara-bar#gana-hero',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
    img: [Narae],
    imgAlt: 'NaraeJang Portfolio',
    title: 'NaraeJang Portfolio',
    keyword: `React | TailwindCSS | SASS | GSAP | UI Design`,
    livePath: null,
    internalPath: null,
    gitLink: 'https://github.com/NaraeJang/2024-Narae-Jang-Portfolio',
  },
  {
    id: nanoid(),
    category: ['ui/ux'],
    img: [Candle],
    imgAlt: 'Register Your Tag',
    title: 'Register Your Tag',
    keyword: `User Flow | Wireframing | UI Design | Web Page Design`,
    livePath: null,
    internalPath: './candle-ifly#candle',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GanaMenu01, GanaMenu02, GanaMenu03, GanaMenu04],
    imgAlt: 'Korean Retro Style Menu',
    title: 'Korean Retro Style Menu',
    keyword: `Marketing | Publication | Graphic Design`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GaVi],
    imgAlt: 'Groupe Gabriel Marketing',
    title: 'Groupe Gabriel Video Ads',
    keyword: `Marketing | Video Editing | Merging Videos | Premier Pro | After Effect`,
    livePath: null,
    internalPath: './group-gabriel#gabriel-video',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GaDi01, GaDi02, GaDi03],
    imgAlt: 'Groupe Gabriel Digital Marketing',
    title: 'Groupe Gabriel Digital Marketing',
    keyword: `Marketing | Web & Graphic Design | Animated Banner Ads | Thumbnail | Social Media Post | Social Media Banner Ads`,
    livePath: null,
    internalPath: './group-gabriel#gabriel',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [DigitalMarketingWebp, CaDi01, CaDi02],
    imgAlt: 'Calego Marketing',
    title: 'Calego Digital Marketing',
    keyword: `Marketing | Email Marketing | Social Media Marketing | Web Design `,
    livePath: null,
    internalPath: './calego-digital-marketing#digital-marketing',
    gitLink: null,
  },

  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
    img: [Wegic],
    imgAlt: 'Wegic',
    title: 'Wegic: Mobile Invitation',
    keyword: `React | SASS | Google Sheets API | UI/UX Design`,
    livePath: './wegic',
    internalPath: null,
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GaBa01, GaBa02, GaBa03],
    imgAlt: 'Gabriel Animated Banners',
    title: 'Animated Web Banners',
    keyword: `Marketing | Animated Web Banners`,
    livePath:
      'https://app.flexitive.com/preview/?breakpoints=970x250,300x50,300x250,320x50,728x90,300x600&pageId=N4XwH4wbCqm&templateId=5686&tab=fix-inPage',
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity'],
    img: [
      Han01,
      Han02,
      Han03,
      Han04,
      Han05,
      Han06,
      Han07,
      Han08,
      Han09,
      Han10,
      Han11,
    ],
    imgAlt: 'Han International Logo Design',
    title: 'Han International',
    keyword: `Brand Identity | Logo Design | Logo Guideline`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GaPr],
    imgAlt: 'Groupe Gabriel Publication Marketing',
    title: 'Groupe Gabriel Publication Design',
    keyword: `Marketing | Publication | Flyer | Business Card | Newspaper | Brochure and more...`,
    livePath: null,
    internalPath: './group-gabriel#GabrielPrint',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [GanaBC],
    imgAlt: 'Bar Ganadara Business Card',
    title: 'Bar Ganadara Business Card',
    keyword: `Marketing | Publication | Graphic Design`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },

  {
    id: nanoid(),
    category: ['ui/ux'],
    img: [CalegoB2C],
    imgAlt: 'Redesigning B2C Website',
    title: 'Redesigning B2C Website',
    keyword: `UI/UX Design | Competitive Analysis | Persona | User Journey Map | User Flow | Sitemap | Usability Study | Wireframing | Prototyping | Case Study`,
    livePath: null,
    internalPath: './redesign-websites#ifly-hero',
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [Arcade01, Arcade02],
    imgAlt: 'Arcade1Up Sticker',
    title: 'Arcade1Up Warranty Sticker',
    keyword: `Marketing | Publication | Graphic Design | Warranty Sticker`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity'],
    img: [
      Vacay01,
      Vacay02,
      Vacay03,
      Vacay04,
      Vacay05,
      Vacay06,
      Vacay07,
      Vacay08,
      Vacay09,
      Vacay10,
      Vacay11,
      Vacay12,
      Vacay13,
      Vacay14,
    ],
    imgAlt: 'Vacay Brand Guideline',
    title: 'Vacay Brand Guideline',
    keyword: `Brand Identity | Brand Guidelines`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity'],
    img: [Jako],
    imgAlt: 'Jako Restaurant Logo',
    title: 'Jako Restaurant',
    keyword: `Brand Identity | Logo Design`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity', 'Marketing'],
    img: [EW01, EW02, EW03, EW04],
    imgAlt: 'EW Network',
    title: 'EW Network',
    keyword: `Marketing | Publication | Graphic Design | Stationary Design | Envelope | Business Card | Brochure`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['Brand Identity'],
    img: [Rk],
    imgAlt: 'R&K Consulting Logo',
    title: 'R&K Consulting',
    keyword: `Brand Identity | Logo Design`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
];
