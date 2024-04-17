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
