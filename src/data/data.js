import { nanoid } from 'nanoid';
import NaraeJangPng from '../assets/projects-images/NaraeJangPortfolio.png';
import NaraeJangWebp from '../assets/projects-images/NaraeJangPortfolio.webp';
import JobmatePng from '../assets/projects-images/Jobmate.png';
import JobmateWebp from '../assets/projects-images/Jobmate.webp';
import WegicPng from '../assets/projects-images/Wegic.png';
import WegicWebp from '../assets/projects-images/Wegic.webp';
import GanaPng from '../assets/projects-images/Gana.png';
import GanaWebp from '../assets/projects-images/Gana.webp';
import RedesignPng from '../assets/projects-images/RedesignIfly.png';
import RedesignWebp from '../assets/projects-images/RedesignIfly.webp';

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
    img: NaraeJangWebp || NaraeJangPng,
    imgAlt: 'NaraeJang Portfolio',
    client: 'Personal Project',
    title: 'Narae Jang Portfolio',
    keyword: `TailwindCSS | SASS | React Router Dom | React | UI`,
    liveBtn: 'Live Demo',
    livePath: null,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/2024-Narae-Jang-Portfolio',
  },
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: JobmateWebp || JobmatePng,
    imgAlt: 'JobMate',
    client: 'Personal Project',
    title: 'JobMate',
    keyword: `MERN | Style components | UI`,
    liveBtn: `Live Demo`,
    livePath: `https://jobmate-1gpn.onrender.com/`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    category: ['development', 'design'],
    img: WegicWebp || WegicPng,
    imgAlt: 'Wegic',
    client: 'Wegic',
    title: 'Mobile Wedding Invitation',
    keyword: `React | SASS | UX/UI`,
    liveBtn: `Live Demo`,
    livePath: `https://naraejang-wegic-project.netlify.app/`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
  {
    id: nanoid(),
    category: ['design'],
    img: GanaWebp || GanaPng,
    imgAlt: 'Bar Ganadara',
    client: 'Bar Ganadara',
    title: 'Booking App',
    keyword: `UX/UI | Web Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'UX/UI',
    designPath: './ganadara-bar#gana-hero',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['design'],
    img: RedesignWebp || RedesignPng,
    imgAlt: 'New IFLY Website',
    client: 'Calego',
    title: 'New IFLY Website',
    keyword: `UX/UI | Web Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'UX/UI',
    designPath: './redesign-websites#ifly-hero',
    git: false,
    gitLink: null,
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

export const educationCards = [
  {
    id: nanoid(),
    year: '2012 - 2017',
    title: `Bachelor of Fine Arts
industrial design`,
    linkTitle: `konkuk University`,
    link: `https://www.konkuk.ac.kr/konkuk/index.do`,
  },
  {
    id: nanoid(),
    year: `2017-2019`,
    title: `Diploma of Vocational Studies
graphic design`,
    linkTitle: `Shadd Health and Business Centre`,
    link: `https://shadd.com/`,
  },
];

export const certificationCards = [
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `Advanced CSS and Sass: Flexbox, Grid, Animations and More!`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-535ee444-4dde-42a3-9dfb-34b17820c79d/`,
  },
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `Javascript Course`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-31894b51-6924-4b1f-9268-23673cb0e005/`,
  },
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `JavaScript: The Advanced Concepts`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-83043455-82ef-4395-aed4-e6743bbfd5ed/`,
  },
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `Modern HTML & CSS (Including Sass)`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-0569ec06-1f3c-4310-898c-78732f1c71d1/`,
  },
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `The Complete 2023 Web Development Bootcamp`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-f800feed-80ba-46e0-a5f2-689df0dbb0a4/`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: ` Google UX Design Specialization`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/specialization/certificate/YX8EV7DBR75N`,
  },
  {
    id: nanoid(),
    year: `2023 / freeCodeCamp`,
    title: `Responsive Web Design`,
    linkTitle: `Show credential`,
    link: `https://www.freecodecamp.org/certification/NaraeJang/responsive-web-design`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Complete Web&Mobile Design: UI/UX, Figma`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-2c574869-b5a0-4892-8800-75a420a0e4be/`,
  },
];

// {
//   id: nanoid(),
//   year: `2023 | Udemy`,
//   title: ``,
//   linkTitle: `Show credential`,
//   link: ``,
// },

export const aboutNavbarList = [
  { id: nanoid(), title: 'about me', path: '#about-me' },
  { id: nanoid(), title: 'work experience', path: '#about-work' },
  {
    id: nanoid(),
    title: 'education & certifications',
    path: '#about-education',
  },
];
