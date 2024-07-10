import { nanoid } from 'nanoid';

// ABOUT PAGE
export const workExperience = [
  {
    id: nanoid(),
    title: 'Graphic Designer',
    company: 'Calego Inc.',
    link: 'https://calego.com/',
    year: '2022',
    other: null,
  },
  {
    id: nanoid(),
    title: 'Web & Graphic Designer',
    company: 'Group Gabriel',
    link: 'https://gabriel.ca/fr/index',
    year: '2019 - 2021',
    other: null,
  },
  {
    id: nanoid(),
    title: 'Freelance Graphic Designer',
    company: 'Freelancer',
    year: '2018 - 2023',
    other: {
      clients:
        'EW Network, R&K consulting, bar ganadara, jako restaurant, han international, wegic',
    },
  },
];
