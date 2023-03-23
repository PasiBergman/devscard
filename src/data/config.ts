import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Pasi Bergman - Cloud Solutions Architect',
    description:
      'I am a Cloud Solutions Architect and a full-stack web developer with a passion for building scalable and reliable cloud solutions. I have a strong background in software development and I am always looking for new challenges.',
    faviconPath: '/src/assets/pasi-gh.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
