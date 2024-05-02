import { nanoid } from 'nanoid';

// ABOUT PAGE
export const workExperience = [
  {
    id: nanoid(),
    title: 'Senior Graphic Designer',
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
