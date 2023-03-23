import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const msSql = createSkillFactory({
  name: 'MS SQL Server',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'skill-icons:angular-light',
  url: 'https://angular.io/',
});

export const nodejs = createSkillFactory({
  name: 'Node.js',
  icon: 'logos:nodejs',
  url: 'https://nodejs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const lua = createSkillFactory({
  name: 'Lua',
  // icon: 'logos:lua',
  icon: 'skill-icons:lua-light',
  url: 'https://www.lua.org/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const dotnet = createSkillFactory({
  name: '.NET (C#)',
  icon: 'skill-icons:dotnet',
  url: 'https://dotnet.microsoft.com/',
});

export const azure = createSkillFactory({
  name: 'Microsoft Azure',
  icon: 'skill-icons:azure-light',
  url: 'https://azure.microsoft.com/',
});

export const aws = createSkillFactory({
  name: 'Amazon Web Services',
  icon: 'skill-icons:aws-light',
  url: 'https://aws.amazon.com/',
});

export const gcp = createSkillFactory({
  name: 'Google Cloud',
  icon: 'skill-icons:gcp-light',
  url: 'https://aws.amazon.com/',
});

export const digitalOcean = createSkillFactory({
  name: 'Digital Ocean',
  icon: 'la:digital-ocean',
  iconColor: '#008AD7',
  url: 'https://www.digitalocean.com/',
});

export const github = createSkillFactory({
  name: 'Github',
  icon: 'skill-icons:github-light',
  iconColor: '#008AD7',
  url: 'https://aws.amazon.com/',
});

export const devOps = createSkillFactory({
  name: 'Azure DevOps',
  icon: 'simple-icons:azuredevops',
  iconColor: '#008AD7',
  url: 'https://dev.azure.com/',
});

export const bitbucket = createSkillFactory({
  name: 'Atlassian Bitbucket',
  icon: 'logos:bitbucket',
  url: 'https://bitbucket.org/',
});

export const gitlab = createSkillFactory({
  name: 'GitLab',
  icon: 'skill-icons:gitlab-light',
  url: 'https://about.gitlab.com/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const swift = createSkillFactory({
  name: 'Swift/SwiftUI',
  icon: 'skill-icons:swift',
  url: 'https://developer.apple.com/swift/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const sqlServer = createSkillFactory({
  name: 'SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'skill-icons:mysql-light',
  url: 'https://www.mysql.com/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'skill-icons:redis-light',
  url: 'https://redis.io/',
});

export const rabbitmq = createSkillFactory({
  name: 'RabbitMQ',
  icon: 'skill-icons:rabbitmq-light',
  url: 'https://www.rabbitmq.com/',
});

// Docker
export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'skill-icons:docker',
  url: 'https://www.docker.com/',
});

// Docker Compose
export const dockerCompose = createSkillFactory({
  name: 'Docker Compose',
  icon: 'logos:docker-icon',
  url: 'https://docs.docker.com/compose/',
});

// Kubernetes
export const k8s = createSkillFactory({
  name: 'Kubernetes',
  icon: 'skill-icons:kubernetes',
  url: 'https://kubernetes.io',
});

// Ansible
export const ansible = createSkillFactory({
  name: 'Ansible',
  icon: 'simple-icons:ansible',
  url: 'https://www.ansible.com',
});

// Ansible
export const openshift = createSkillFactory({
  name: 'OpenShift',
  icon: 'logos:openshift',
  url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift',
});

// Windows Server
export const windowsServer = createSkillFactory({
  name: 'Windows Server',
  icon: 'logos:microsoft-windows',
  url: 'https://www.microsoft.com/en-us/windows-server/',
});

// Linux
export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'skill-icons:linux-light',
  url: 'https://www.linux.org/',
});

// macOS
export const macOS = createSkillFactory({
  name: 'macOS',
  icon: 'wpf:macos',
  url: 'https://support.apple.com/macos',
});

export const azureQueue = createSkillFactory({
  name: 'Service Bus Queue',
  icon: 'skill-icons:azure-light',
  url: 'https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions',
});

export const awsQueue = createSkillFactory({
  name: 'AWS SQS',
  icon: 'skill-icons:aws-light',
  url: 'https://aws.amazon.com/sqs/',
});
