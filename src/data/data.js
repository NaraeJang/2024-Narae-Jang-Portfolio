import { nanoid } from 'nanoid';
import NaraeJangPng from '../assets/projects-images/NaraeJangPortfolio.png';
import NaraeJangWebp from '../assets/projects-images/NaraeJangPortfolio.webp';
import JobmatePng from '../assets/projects-images/Jobmate.png';
import JobmateWebp from '../assets/projects-images/Jobmate.webp';
import WegicPng from '../assets/projects-images/Wegic.png';
import WegicWebp from '../assets/projects-images/Wegic.webp';

export const footerNav = [
  {
    id: nanoid(),
    title: 'Narae Jang',
    gitLink: 'https://github.com/NaraeJang/2024-Narae-Jang-Portfolio',
  },
  {
    id: nanoid(),
    title: 'JobMate',
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    title: 'Wegic',
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
];

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
    designBtn: 'UX/UI',
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

export const faqQuestions = [
  {
    id: nanoid(),
    title: 'How did I step into the world of development?',
    info: 'I love coding that is the reason',
  },
  {
    id: nanoid(),
    title: 'Where do you locate at?',
    info: `Originally I'm from Seoul, South Korea. Currently, I live in Montreal, Quebec, Canada.`,
  },
  {
    id: nanoid(),
    title: 'What do you do outside of work?',
    info: 'Outside work, I enjoy coffee, listening to music, exploring the world with my partner, and playing with my Jack Russel, Doong-E. Currently, I’m interested in Tango Dance, I might learn it with my partner.',
  },
  {
    id: nanoid(),
    title: 'What is my nationality?',
    info: `I'm korean.`,
  },
];

// ABOUT PAGE
export const workExperience = [
  {
    id: nanoid(),
    title: 'UX/UI Designer ❘ Senior Graphic Designer',
    company: 'Calego Inc.',
    year: '2022',
    other: null,
  },
  {
    id: nanoid(),
    title: 'Web & Graphic Designer',
    company: 'Group Gabriel',
    year: '2019 - 2021',
    other: null,
  },
  {
    id: nanoid(),
    title: 'Freelance Designer',
    company: null,
    year: '2018 - 2023',
    other: {
      clients:
        'EW Network, R&K consulting, bar ganadara, jako restaurant, han international, wegic',
    },
  },
];
