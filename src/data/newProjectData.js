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
    category: ['Brand Identity', 'Marketing'],
    img: [GanaBC],
    imgAlt: 'Bar Ganadara Business Card',
    title: 'Bar Ganadara Business Card',
    keyword: `Case Study | UI/UX Design`,
    liveBtn: null,
    livePath: null,
    designBtn: null,
    designPath: null,
    git: false,
    gitLink: null,
  },
];
