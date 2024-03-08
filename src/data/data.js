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
    liveBtn: 'Live Demo',
    livePath: null,
    designBtn: 'More in UX/UI',
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/2024-Narae-Jang-Portfolio',
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
    livePath: `https://jobmate-1gpn.onrender.com/`,
    designBtn: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: WegicPng || WegicWebp,
    imgAlt: 'Wegic',
    client: 'Wegic',
    title: 'Mobile Wedding Invitation',
    keyword: `React | SASS | UX/UI`,
    liveBtn: `Live Demo`,
    livePath: `https://naraejang-wegic-project.netlify.app/`,
    designBtn: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
];
