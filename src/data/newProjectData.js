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
    category: ['ui/ux'],
    img: [GanaApp01, GanaApp02],
    imgAlt: 'Ganadara App',
    title: 'Job Tracking Web Application',
    keyword: `UI/UX Design | Competitive Analysis | Persona | User Journey Map | User Flow | Sitemap | Usability Study | Wireframing | Prototyping | Case Study`,
    livePath: null,
    internalPath: './ganadara-bar#gana-hero',
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
    category: ['Brand Identity'],
    img: [Rk],
    imgAlt: 'R&K Consulting Logo',
    title: 'R&K Consulting',
    keyword: `Brand Identity | Logo Design`,
    livePath: null,
    internalPath: null,
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
    img: [EW01, EW02, EW03, EW04],
    imgAlt: 'EW Network',
    title: 'EW Network',
    keyword: `Marketing | Publication | Graphic Design | Stationary Design | Envelope | Business Card | Brochure`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
];
