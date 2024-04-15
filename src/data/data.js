import { nanoid } from 'nanoid';
import NaraeJangWebp from '../assets/projects-images/NaraeJangPortfolio.webp';
import JobmateWebp from '../assets/projects-images/Jobmate.webp';
import WegicWebp from '../assets/projects-images/Wegic.webp';
import GanaWebp from '../assets/projects-images/Gana.webp';
import RedesignWebp from '../assets/projects-images/RedesignIfly.webp';
import TagWebp from '../assets/projects-images/Calego_tag.webp';
import DigitalMarketingWebp from '../assets/projects-images/Calego.webp';
import GabrielThumWebp from '../assets/projects-images/GabrielThum.webp';
import GanaPrintThumWebp from '../assets/projects-images/Thumb-Gana.webp';
import LogoThumWebp from '../assets/projects-images/Thumb-Logo.webp';
import ArtThumWebp from '../assets/projects-images/Thumb-Other.webp';
import EwThumWebp from '../assets/projects-images/Thumb-Stationary.webp';

export const footerNav = [
  {
    id: nanoid(),
    title: 'Instagram',
    gitLink:
      'https://www.instagram.com/art.phile?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr',
  },
  {
    id: nanoid(),
    title: 'LinkedIn',
    gitLink: 'https://www.linkedin.com/in/naraejang0117/',
  },
  {
    id: nanoid(),
    title: 'GitHub',
    gitLink: 'https://github.com/naraejang',
  },
];

export const projectsData = [
  {
    id: nanoid(),
    category: ['ui/ux'],
    img: GanaWebp,
    imgAlt: 'Bar Ganadara',
    client: 'Personal Project',
    title: 'Bar Ganadara App',
    keyword: `Case Study | UI/UX Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './ganadara-bar#gana-hero',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['ui/ux'],
    img: RedesignWebp,
    imgAlt: 'New IFLY Website',
    client: 'Calego',
    title: 'New IFLY Website',
    keyword: `UI/UX Design | Web Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './redesign-websites#ifly-hero',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['ui/ux'],
    img: TagWebp,
    imgAlt: 'Register Your Tag',
    client: 'Calego',
    title: 'Register Your Tag',
    keyword: `UI Design | Web Page Design`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './candle-ifly#candle',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
    img: JobmateWebp,
    imgAlt: 'JobMate',
    client: 'Personal Project',
    title: 'JobMate',
    keyword: `MERN | MongoDB | Express | React | NodeJS | Style components | UI Design`,
    liveBtn: `Live Demo`,
    livePath: `https://jobmate-1gpn.onrender.com/`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Jobmate',
  },
  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
    img: WegicWebp,
    imgAlt: 'Wegic',
    client: 'Wegic',
    title: 'Mobile Invitation',
    keyword: `React | SASS | UI/UX Design`,
    liveBtn: `Live Demo`,
    livePath: `./wegic`,
    designBtn: null,
    designPath: null,
    git: true,
    gitLink: 'https://github.com/NaraeJang/Wegic',
  },
  {
    id: nanoid(),
    category: ['development', 'ui/ux'],
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
    category: ['marketing'],
    img: DigitalMarketingWebp,
    imgAlt: 'Digital Marketing',
    client: 'Calego',
    title: 'Digital Marketing',
    keyword: `Graphic Design | Digital Marketing`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
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
    designBtn: 'Learn More',
    designPath: './group-gabriel#gabriel',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['marketing'],
    img: GanaPrintThumWebp,
    imgAlt: 'Marketing',
    client: 'Bar Ganadara',
    title: 'Print Design',
    keyword: `Freelance Work | Graphic Design | Print Design | Menu | Business Card`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './ganabar-print#print-gana-toppage',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['marketing'],
    img: EwThumWebp,
    imgAlt: 'Marketing',
    client: 'EW Network',
    title: 'Stationary Design',
    keyword: `Freelance Work | Graphic Design | Print Design | Brochure | Business Card | Envelope`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './ew_network#ew_network-top',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['other'],
    img: LogoThumWebp,
    imgAlt: 'Freelance Work',
    client: 'Several Clients',
    title: 'Logo Design',
    keyword: `Freelance Work | Han International | Jako Restaurant | R&K Consulting`,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './logo_design#logo_design-top',
    git: false,
    gitLink: null,
  },
  {
    id: nanoid(),
    category: ['other'],
    img: ArtThumWebp,
    imgAlt: 'Artwork',
    client: 'Personal Project',
    title: 'Artwork',
    keyword: `Adobe Creative Suite | Illustrator | Photoshop | InDesign | After Effects | Premiere Pro `,
    liveBtn: null,
    livePath: null,
    designBtn: 'Learn More',
    designPath: './artwork#artwork-top',
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
    title: 'Things I love',
    info: `🏂 Snowboarding | 🏕 Camping | 🕹 Gaming | 🐶 Dogs | 🤤 Food | 🤿 Scuba diving | 🛫 Traveling | 📸 Photography`,
  },
  {
    id: nanoid(),
    title: 'My MBTI',
    info: `I am an INTJ, known for my strategic thinking and analytical, logical, and creative abilities. I am always seeking ways to improve and optimize as a problem solver who enjoys challenges and continually strives for enhancement.`,
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
    title: 'UI/UX & Senior Graphic Designer',
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
    linkTitle: `SHADD`,
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

export const infiniteScrollDesign = [
  'Figma',
  'Illustrator',
  'Photoshop',
  'Indesign',
  'GoogleAnalytics',
  'InteractionDesign',
  'VisualDesign',
  'Branding',
  'Marketing',
  'Prototyping',
  'VideoEditing',
  'JourneyMapping',
];
export const infiniteScrollDev = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TailwindCSS',
  'SCSS',
  'StyledComponents',
  'GitHub',
  'VSCode',
  'PostMan',
  'Gsap',
];
