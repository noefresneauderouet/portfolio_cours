import type { Dict } from './fr';

export const en: Dict = {
  meta: {
    title: 'Noé Fresneau Derouet — Full-stack web developer',
    description:
      'Junior full-stack web developer based in Angers, France. React, Next.js, TypeScript, PHP. Looking for a work-study contract for 2026-2027.',
    langLabel: 'FR',
    langTitle: 'Passer en français',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Work',
    path: 'Journey',
    contact: 'Contact',
    cv: 'Resume',
    menu: 'Menu',
  },
  hero: {
    badge: 'Open to a work-study contract · 2026-2027',
    role: 'Full-stack web developer',
    tagline:
      'Junior, self-driven and curious. I like learning, solving real problems and shipping interfaces that hold up.',
    ctaPrimary: 'View my work',
    ctaSecondary: 'Get in touch',
    scroll: 'Scroll',
    locationLabel: 'Based in',
    location: 'Angers, France',
  },
  about: {
    eyebrow: 'About',
    title: 'A bit more than code',
    p1: 'I work independently and I learn fast. What drives me is solving concrete problems and building things — going from a fuzzy need to an application that actually works.',
    p2: "I'm finishing a Web & Mobile Developer diploma at cefii and moving on to the third year of a Web Development Bachelor at MyDigitalSchool, as an apprentice. I've already shipped a full association website as a freelancer and a messaging PWA in a company.",
    p3: "Away from the keyboard: football in a club since I was a kid, and Rocket League (GC3). Same thing appeals to me in both — keep improving until it gets clean.",
    factsTitle: 'At a glance',
    facts: [
      { label: 'Location', value: 'Angers, France' },
      { label: 'Mobility', value: "Driver's licence" },
      { label: 'Looking for', value: 'Apprenticeship 2026-2027' },
      { label: 'Languages', value: 'French · English' },
    ],
    softTitle: 'Soft skills',
    soft: ['Autonomy', 'Fast learner', 'Teamwork', 'Problem solving'],
    photoAlt: 'Portrait of Noé Fresneau Derouet',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'My toolbox',
    subtitle: 'The tech I use day to day, on client work and in training.',
    groups: {
      frontend: { title: 'Front-end', hint: 'Interfaces, animation, accessibility' },
      backend: { title: 'Back-end', hint: 'APIs, databases, authentication' },
      tools: { title: 'Tools', hint: 'Versioning, design, project management' },
      other: { title: 'Other', hint: 'Mobile, real-time, deployment' },
    },
    languagesTitle: 'Languages',
    languages: [
      { name: 'French', level: 5, note: 'Native' },
      { name: 'English', level: 4, note: 'Professional' },
    ],
  },
  projects: {
    eyebrow: 'Work',
    title: 'What I have built',
    subtitle: 'A selection of professional, freelance, personal and training projects.',
    featured: 'Featured',
    stackLabel: 'Stack',
    items: {
      ateliersangevins: {
        title: 'Ateliers Angevins',
        context: 'Freelance',
        summary: 'Full redesign and modernisation of the Ateliers Angevins association website.',
        details: [
          'Admin area to write articles in Markdown and publish events.',
          'Neon (Postgres) database managed with Prisma, images stored on Cloudinary.',
          'Hosting and continuous deployment on Vercel.',
        ],
      },
      epheria: {
        title: 'Epheria — messaging PWA',
        context: 'Internship · 2 months',
        summary: 'Internal messaging PWA connected to the company website.',
        details: [
          'Channel system (groups), private messages and real-time push notifications.',
          'WebSocket, webhooks and a service worker for offline support and notifications.',
          'Back-end connected through SSO: JWT, API key and VAPID keys.',
          'Alongside: improvements to the existing website (React, Next.js, Tailwind, TypeScript).',
        ],
      },
      geoquizz: {
        title: 'GeoQuizz — geography quiz',
        context: 'Personal project',
        summary:
          'Online geography game: find flags, capitals, countries and regions, solo or with friends.',
        details: [
          '196 countries by zone, which can be mixed (Africa + Europe…), plus the regions of the United States, France, Spain and China. Answers in French or English, forgiving of typos.',
          'Installable PWA that works offline (service worker), static Next.js export on Vercel, covered by 200+ unit tests.',
          'Supabase accounts (e-mail or Google), profile photos and an online leaderboard timed by the server to prevent cheating.',
          'Real-time multiplayer rooms: join by code or link, public rooms and random matchmaking.',
        ],
      },
      'gestion-projet': {
        title: 'Project management platform',
        context: 'Training project · solo',
        summary: 'Collaborative app to create and run projects with tasks and discussions.',
        details: [
          'Front-end and back-end built entirely on my own, MVC architecture.',
          'Full CRUD on projects and tasks, discussion space per project.',
          'Database designed with Looping (conceptual, logical and physical models), tracked on Trello.',
        ],
      },
      'escape-game': {
        title: 'Escape game back-office',
        context: 'Training project',
        summary: 'Complete administration tool for an escape game business.',
        details: [
          'CRUD on puzzles, hints and bookings.',
          'Automatic confirmation e-mails sent to customers.',
          'Responsive Bootstrap interface, MySQL database.',
        ],
      },
    },
  },
  path: {
    eyebrow: 'Journey',
    title: 'Education & experience',
    educationTitle: 'Education',
    experienceTitle: 'Professional experience',
    sideTitle: 'Other experience',
    sideSubtitle: 'Jobs that taught me rigour, pace and how to deal with customers.',
    items: {
      mds: {
        title: 'Web Development Bachelor (BSc)',
        org: 'MyDigitalSchool',
        text: 'Third year of the web development bachelor, as an apprentice.',
      },
      cefii: {
        title: 'Web & Mobile Developer diploma',
        org: 'cefii training centre',
        text: 'Full-stack training: PHP, JavaScript, MySQL, HTML/CSS, MVC architecture, database design.',
      },
      univ: {
        title: 'Mathematics / Computer Science, 1st year',
        org: 'University of Angers — Faculty of Science',
        text: 'Foundations in algorithms, mathematics and programming.',
      },
      freelance: {
        title: 'Website creation — Freelance',
        org: 'Ateliers Angevins',
        text: 'Redesign of the association website with an admin area (Markdown articles, events). React, Next.js, Tailwind, Prisma, Neon, Cloudinary, Vercel.',
      },
      epheria: {
        title: 'Web developer internship',
        org: 'Epheria · 2 months',
        text: 'Built a messaging PWA (channels, private messages, push notifications) and improved the company website.',
      },
      centrakor: {
        title: 'Sales assistant — seasonal aisle',
        org: 'Centrakor · weekends',
        text: 'Customer relations and sales.',
      },
      station: {
        title: 'General assistant',
        org: 'Portes d’Angers service station · holidays',
        text: 'Front desk, checkout and day-to-day store management.',
      },
      toque: {
        title: 'Production operator',
        org: 'La Toque Angevine',
        text: 'Production line work, pace and quality control.',
      },
      mais: {
        title: 'Seasonal job',
        org: 'Maize detasseling',
        text: 'Outdoor teamwork over long working days.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s work together',
    subtitle:
      "I'm looking for a work-study contract in web development for 2026-2027. A question, a project, an opportunity: my inbox is open.",
    emailLabel: 'E-mail',
    phoneLabel: 'Phone',
    cta: 'Email me',
    cvCta: 'Download my resume',
    copy: 'Copy',
    copied: 'Copied!',
  },
  footer: {
    built: 'Designed and built by Noé Fresneau Derouet',
    stack: 'Astro · Tailwind CSS · Motion',
    top: 'Back to top',
  },
};
