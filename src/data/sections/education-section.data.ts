import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Master of Science (Eng.)',
      institution: 'University of Oulu',
      image: import('@/assets/logos/university-of-oulu.jpeg'),
      dates: [new Date('1988.08'), new Date('1997.04')],
      description: "Master's degree in Civil Engineering",
      links: [website({ url: 'https://www.oulu.fi/en' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
