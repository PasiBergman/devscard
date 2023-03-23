import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import { eslint, firebase, nextJs, nx, pnpm, react, reactQuery, tailwindCss, typescript, vue } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Cloud Solutions Architect, Full Stack Developer',
      company: 'HiQ Finland',
      image: import('@/assets/logos/hiq.jpeg'),
      dates: [new Date('2015-08'), null],
      description: `
        - Cloud solutions architect
        - Full stack web developer
      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Technology Lead, Enterprise Architect',
      company: 'HiQ Finland',
      image: import('@/assets/logos/hiq.jpeg'),
      dates: [new Date('2010-05'), new Date('2015-08')],
      description: `
        - Business area techology lead, enterprise architect
        - Solutions architect
        - Full stack web developer
      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Partner Manager, Business development',
      company: 'HiQ Finland',
      image: import('@/assets/logos/hiq.jpeg'),
      dates: [new Date('2007-09'), new Date('2010-05')],
      description: `
        - Business development
        - Sales
        - Solution architecture
      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [],
    },
    {
      role: 'Project manager, developer',
      company: 'HiQ Finland',
      image: import('@/assets/logos/hiq.jpeg'),
      dates: [new Date('2000-03'), new Date('2007-09')],
      description: `
        - Project management
        - Backend developer
      `,
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
