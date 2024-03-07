import { nanoid } from 'nanoid';
import NaraeJangPng from '../assets/projects-images/NaraeJangPortfolio.png';
import NaraeJangWebp from '../assets/projects-images/NaraeJangPortfolio.webp';
import JobmatePng from '../assets/projects-images/Jobmate.png';
import JobmateWebp from '../assets/projects-images/Jobmate.webp';
import WegicPng from '../assets/projects-images/Wegic.png';
import WegicWebp from '../assets/projects-images/Wegic.webp';

export const projectsData = [
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: NaraeJangPng || NaraeJangWebp,
    imgAlt: 'NaraeJang Portfolio',
    client: 'Personal Project',
    title: 'Narae Jang Portfolio',
    keyword: `TailwindCSS | SASS | React Router Dom | React | UI`,
    liveBtn: `Live Demo`,
    designBtn: null,
    gitLink: true,
  },
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: JobmatePng || JobmateWebp,
    imgAlt: 'JobMate',
    client: 'Personal Project',
    title: 'JobMate',
    keyword: `MERN | Style components | UI`,
    liveBtn: `Live Demo`,
    designBtn: null,
    gitLink: true,
  },
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: WegicPng || WegicWebp,
    imgAlt: 'Wegic',
    client: 'Personal Project',
    title: 'Narae Jang Portfolio',
    keyword: `React | SASS | UX/UI`,
    liveBtn: `Live Demo`,
    designBtn: null,
    gitLink: true,
  },
];
