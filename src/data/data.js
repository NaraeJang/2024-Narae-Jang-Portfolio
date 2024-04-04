import { nanoid } from 'nanoid';
// import NaraeJangPng from '../assets/projects-images/NaraeJangPortfolio.png';
import NaraeJangWebp from '../assets/projects-images/NaraeJangPortfolio.webp';
// import JobmatePng from '../assets/projects-images/Jobmate.png';
import JobmateWebp from '../assets/projects-images/Jobmate.webp';
// import WegicPng from '../assets/projects-images/Wegic.png';
import WegicWebp from '../assets/projects-images/Wegic.webp';
// import GanaPng from '../assets/projects-images/Gana.png';
import GanaWebp from '../assets/projects-images/Gana.webp';
// import RedesignPng from '../assets/projects-images/RedesignIfly.png';
import RedesignWebp from '../assets/projects-images/RedesignIfly.webp';
import TagWebp from '../assets/projects-images/Calego_tag.webp';
import DigitalMarketingWebp from '../assets/projects-images/Calego.webp';
import GabrielThumWebp from '../assets/projects-images/GabrielThum.webp';

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
    category: ['development', 'ux/ui'],
    img: NaraeJangWebp,
    imgAlt: 'NaraeJang Portfolio',
    client: 'Personal Project',
    title: 'Narae Jang Portfolio',
    keyword: `React | TailwindCSS | SASS | UI Design`,
    liveBtn: `You're here!`,
    livePath: null,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/2024-Narae-Jang-Portfolio',
  },
  {
    id: nanoid(),
    category: ['development', 'ux/ui'],
    img: JobmateWebp,
    imgAlt: 'JobMate',
    client: 'Personal Project',
    title: 'JobMate',
    keyword: `MERN | Style components | UI Design`,
    liveBtn: `Live Demo`,
    livePath: `https://jobmate-1gpn.onrender.com/`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    category: ['development', 'ux/ui'],
    img: WegicWebp,
    imgAlt: 'Wegic',
    client: 'Wegic',
    title: 'Mobile Wedding Invitation',
    keyword: `React | SASS | UX/UI Design`,
    liveBtn: `Live Demo`,
    livePath: `./wegic`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
  {
    id: nanoid(),
    category: ['ux/ui'],
    img: GanaWebp,
    imgAlt: 'Bar Ganadara',
    client: 'Personal Project',
    title: 'Bar Ganadara App',
    keyword: `Case Study | UX/UI Design | Web Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'UX/UI',
    designPath: './ganadara-bar#gana-hero',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['ux/ui'],
    img: RedesignWebp,
    imgAlt: 'New IFLY Website',
    client: 'Calego',
    title: 'New IFLY Website',
    keyword: `UX/UI Design | Web Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'UX/UI',
    designPath: './redesign-websites#ifly-hero',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['ux/ui'],
    img: TagWebp,
    imgAlt: 'Register Your Tag',
    client: 'Calego',
    title: 'Register Your Tag',
    keyword: `UI Design | Web Page Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'UI Design',
    designPath: './candle-ifly#candle',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['marketing'],
    img: DigitalMarketingWebp,
    imgAlt: 'Digital Marketing',
    client: 'Calego',
    title: 'Digital Marketing',
    keyword: `Graphic Design | Digital Marketing`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Graphic Design',
    designPath: './calego-digital-marketing#digital-marketing',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['marketing'],
    img: GabrielThumWebp,
    imgAlt: 'Marketing',
    client: 'Groupe Gabriel',
    title: 'Marketing',
    keyword: `Graphic Design | Digital & Print Marketing | Video Editing | Maintaining Gabriel Websites`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Graphic Design',
    designPath: './group-gabriel#gabriel',
    git: false,
    gitLink: null,
  },
];

export const faqQuestions = [
  {
    id: nanoid(),
    title: 'How did I step into the world of development?',
    info: 'I discovered my love for coding while working as a designer. I learned to express my creativity through design while coding empowered me to bring those ideas to life. The sense of achievement I get from coding is a strong motivator that propelled me through this journey. I find joy in learning new concepts, completing projects, and witnessing them function seamlessly.',
  },
  {
    id: nanoid(),
    title: 'What tools do I use?',
    info: `I utilize a variety of tools depending on the project requirements. For the front-end, I work with HTML, CSS, JavaScript, React.js, TailwindCSS, SASS, Bootstrap, Styled-Components, React Router Dom, and React Query. These tools enable me to create dynamic and responsive user interfaces efficiently. For the back-end, I rely on PostMan for API testing, alongside Node.js, Express.js, and MongoDB for server-side development and database management. For design tasks, I use Figma and Adobe Creative Suite to conceptualize and design user interfaces. Additionally, I employ essential development tools such as NPM, GitHub, and VS Code for package management, version control, and coding tasks, ensuring a streamlined and effective development process.`,
  },
  {
    id: nanoid(),
    title: 'What do I do outside of work?',
    info: `Outside work, I enjoy coffee, listening to music, exploring the world with my partner, and playing with my Jack Russel, Doong-E. Currently, I’m interested in Tango, I might learn it with my partner. 🙂`,
  },
  {
    id: nanoid(),
    title: 'What is my nationality?',
    info: `I was born in Incheon, South Korea, but currently I am living in Montreal, Canada as a permanent resident.`,
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
    year: `2024 | Udemy`,
    title: `MERN 2024 Edition`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-6ab4aa99-ff5a-4f9e-b407-b0ffa0c4e06f/`,
  },
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
    title: `JavaScript: The Advanced Concepts`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-83043455-82ef-4395-aed4-e6743bbfd5ed/`,
  },
  {
    id: nanoid(),
    year: `2023 | Udemy`,
    title: `Basic Javascript`,
    linkTitle: `Show credential`,
    link: `https://www.udemy.com/certificate/UC-31894b51-6924-4b1f-9268-23673cb0e005/`,
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
    year: `2023 | freeCodeCamp`,
    title: `Responsive Web Design`,
    linkTitle: `Show credential`,
    link: `https://www.freecodecamp.org/certification/NaraeJang/responsive-web-design`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Google UX Design Specialization`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/specialization/certificate/YX8EV7DBR75N`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Responsive Web Design in Adobe XD`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/LUT57TP7YGJN`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Create High-Fidelity Designs and Prototypes in Figma`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/6RZPTK7BUSS5`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Conduct UX Research and Test Early Concepts`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/7CSJTW9URK39`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Foundations of User Experience (UX) Design`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/56PHXA34HXSB`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `Build Wireframes and Low-Fidelity Prototypes`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/23NFW93YZP5R`,
  },
  {
    id: nanoid(),
    year: `2022 | Coursera`,
    title: `The UX Design Process: Empathize, Define, and Ideate`,
    linkTitle: `Show credential`,
    link: `https://www.coursera.org/account/accomplishments/certificate/TLJQNTKPEBU9`,
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
// 'https://iflyluggage.com/'
// 'https://iflyluggage.com/pages/candle-review'

export const aboutNavbarList = [
  { id: nanoid(), title: 'about me', path: '#about-me' },
  { id: nanoid(), title: 'work experience', path: '#about-work' },
  {
    id: nanoid(),
    title: 'education',
    path: '#about-education',
  },
  {
    id: nanoid(),
    title: 'certifications',
    path: '#about-license',
  },
];
