/**
 * Donnees non traduisibles (identite, liens, technos, dates).
 * Le texte traduit vit dans src/i18n/fr.ts et src/i18n/en.ts.
 */

export const profile = {
  firstName: 'Noé',
  lastName: 'Fresneau Derouet',
  initials: 'NFD',
  email: 'noe.fresneau@gmail.com',
  phone: '07 68 32 77 70',
  phoneHref: '+33768327770',
  city: 'Angers',
  country: 'France',
  birthDate: '2005-08-17',
  github: 'https://github.com/noefresneauderouet',
  githubHandle: 'noefresneauderouet',
  linkedin: 'https://www.linkedin.com/in/nfd17',
  linkedinHandle: 'nfd17',
  /** Depose ton CV ici : public/cv-noe-fresneau-derouet.pdf */
  cv: '/cv-noe-fresneau-derouet.pdf',
  /** Optionnel : depose une photo ici, sinon le monogramme s'affiche. */
  photo: '/photo.jpg',
} as const;

export type SkillGroup = {
  id: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    items: ['PHP', 'Symfony', 'Node.js', 'SQL', 'NoSQL', 'Prisma', 'API REST', 'WebSocket'],
  },
  {
    id: 'tools',
    items: ['Git', 'Docker', 'GitHub', 'VS Code', 'Claude Code', 'Copilot', 'Figma', 'Trello', 'Looping'],
  },
  {
    id: 'other',
    items: ['C++', 'React Native', 'PWA / Service Worker', 'JWT / SSO', 'Netlify', 'Vercel', 'Cloudinary', 'Neon', 'Supabase'],
  },
];

/** Bandeau defilant du hero. */
export const marquee = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PHP',
  'Symfony',
  'MySQL',
  'Prisma',
  'React Native',
  'Git',
  'C++',
];

export type Project = {
  id: string;
  year: string;
  stack: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
  accent: 'violet' | 'cyan' | 'fuchsia';
};

export const projects: Project[] = [
  {
    id: 'ateliersangevins',
    year: '2026',
    accent: 'violet',
    featured: true,
    links: [{label: 'Voir le site', href: 'https://ateliersangevins.org'}],
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Prisma', 'Neon (Postgres)', 'Cloudinary', 'Netlify'],
  },
  {
    id: 'epheria',
    year: '2026',
    accent: 'cyan',
    featured: true,
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'WebSocket',
      'Push / VAPID',
      'Service Worker',
      'SSO JWT',
    ],
  },
  {
    id: 'geoquizz',
    year: '2026',
    accent: 'violet',
    featured: true,
    links: [
      { label: 'geoquizz.games', href: 'https://geoquizz.games' },
      { label: 'itch.io', href: 'https://nfd7.itch.io/geoquizz' },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Realtime',
      'Service Worker',
      'd3-geo',
      'Vercel',
    ],
  },
  {
    id: 'gestion-projet',
    year: '2025',
    accent: 'fuchsia',
    stack: ['PHP', 'MVC', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Looping'],
  },
  {
    id: 'escape-game',
    year: '2025',
    accent: 'violet',
    stack: ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'SMTP'],
  },
];

export type TimelineEntry = {
  id: string;
  period: string;
  kind: 'education' | 'work' | 'side';
};

export const education: TimelineEntry[] = [
  { id: 'mds', period: '2026 — 2027', kind: 'education' },
  { id: 'cefii', period: '2025 — 2026', kind: 'education' },
  { id: 'univ', period: '2024 — 2025', kind: 'education' },
];

export const experience: TimelineEntry[] = [
  { id: 'freelance', period: '2026', kind: 'work' },
  { id: 'epheria', period: '2026', kind: 'work' },
];

export const sideJobs: TimelineEntry[] = [
  { id: 'centrakor', period: '2026', kind: 'side' },
  { id: 'station', period: '2023 — 2025', kind: 'side' },
  { id: 'toque', period: '2022', kind: 'side' },
  { id: 'mais', period: '2022', kind: 'side' },
];
