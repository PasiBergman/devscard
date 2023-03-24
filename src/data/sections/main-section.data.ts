import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/pasi-gh.jpeg'),
  fullName: 'Pasi Bergman',
  role: 'Cloud Solutions Architect - Full Stack Web Developer',
  details: [
    { label: 'Phone', value: '+358 40 559 6837', url: 'tel:00358405596837' },
    { label: 'Email', value: 'dev@pasibergman.fi', url: 'mailto:dev@pasibergman.fi' },
    { label: 'From', value: 'Helsinki, Finland' },
    { label: 'Salary', value: '90 000€+/a, 120€+/h' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+358 40 559 6837' },
    { label: 'Email', value: 'dev@pasibergman.fi' },
    { label: 'LinkedIn', value: 'in/pasibergman', url: 'https://linkedin.com/in/pasibergman' },
    { label: 'GitHub', value: 'PasiBergman', url: 'https://github.com/PasiBergman' },
    { label: 'Website', value: 'pasibergman.fi', url: 'https//www.pasibergman.fi', fullRow: true },
  ],
  description:
    "I'm passionate about technology and using it to simplify our daily life while making work more fun and productive. I'm currently working as **cloud solutions architect** and **full-stack web developer** at HiQ Finland. My responsibilities vary from system development to solutions architect's and tech lead's responsibilities in projects. I'm working hands-on together with customer's or HiQ's project team. I typically develop on top of public cloud platforms (Microsoft Azure, Amazon Web Services, Google Cloud) mostly utilizing PaaS, serverless or container orchestration (Kubernetes) services.",
  tags: [
    { name: 'Cloud Solutions' },
    { name: 'SaaS, PaaS' },
    { name: 'DevOps' },
    { name: 'CI/CD' },
    { name: 'Virtualization' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Pasi-Bergman.pdf',
  },
  links: [
    linkedin({ url: 'https://www.linkedin.com/in/pasibergman/' }),
    github({ url: 'https://github.com/PasiBergman' }),
    twitter({ url: 'https://twitter.com/pasibergman' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
