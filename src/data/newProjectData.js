import { nanoid } from 'nanoid';

import GanaBC from '../assets/newItemThumbs/GanaBC.webp';
import GanaMenu01 from '../assets/newItemThumbs/GanaMenu01.webp';
import GanaMenu02 from '../assets/newItemThumbs/GanaMenu02.webp';
import GanaMenu03 from '../assets/newItemThumbs/GanaMenu03.webp';
import GanaMenu04 from '../assets/newItemThumbs/GanaMenu04.webp';
import Jobmate from '../assets/newItemThumbs/Jobmate.webp';

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
    category: ['Brand Identity', 'Marketing'],
    img: [GanaBC],
    imgAlt: 'Bar Ganadara Business Card',
    title: 'Bar Ganadara Business Card',
    keyword: `Marketing | Publication | Graphic`,
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
    keyword: `Marketing | Publication | Graphic`,
    livePath: null,
    internalPath: null,
    gitLink: null,
  },
];
