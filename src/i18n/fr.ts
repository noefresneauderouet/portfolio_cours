export const fr = {
  meta: {
    title: 'Noé Fresneau Derouet — Développeur web full-stack',
    description:
      "Développeur web full-stack junior basé à Angers. React, Next.js, TypeScript, PHP. En recherche d'une alternance pour 2026-2027.",
    langLabel: 'EN',
    langTitle: 'Switch to English',
  },
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    path: 'Parcours',
    contact: 'Contact',
    cv: 'CV',
    menu: 'Menu',
  },
  hero: {
    badge: 'Disponible pour une alternance · 2026-2027',
    role: 'Développeur web full-stack',
    tagline:
      "Junior, autonome et curieux. J'aime apprendre, résoudre des problèmes et livrer des interfaces qui tiennent la route.",
    ctaPrimary: 'Voir mes projets',
    ctaSecondary: 'Me contacter',
    scroll: 'Défiler',
    locationLabel: 'Basé à',
    location: 'Angers, France',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un peu plus que du code',
    p1: "Je suis autonome et j'ai une forte capacité d'apprentissage. Ce qui me motive, c'est de résoudre des problèmes concrets et d'innover — passer d'un besoin flou à une application qui marche vraiment.",
    p2: "Aujourd'hui je termine un titre Développeur Web et Web Mobile chez cefii et je poursuis en 3ᵉ année de Bachelor Développement Web à MyDigitalSchool, en alternance. J'ai déjà livré un site associatif complet en freelance et une PWA de messagerie en entreprise.",
    p3: "En dehors du clavier : du foot en club depuis tout petit, et du Rocket League (GC3). Dans les deux cas, la même chose me plaît — progresser jusqu'à ce que ça devienne propre.",
    factsTitle: 'En bref',
    facts: [
      { label: 'Localisation', value: 'Angers (49)' },
      { label: 'Mobilité', value: 'Permis B' },
      { label: 'Recherche', value: 'Alternance 2026-2027' },
      { label: 'Langues', value: 'Français · Anglais' },
    ],
    softTitle: 'Soft skills',
    soft: ['Autonomie', "Forte capacité d'apprentissage", "Travail d'équipe", 'Résolution de problèmes'],
    photoAlt: 'Portrait de Noé Fresneau Derouet',
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Ma boîte à outils',
    subtitle: 'Les technos que j’utilise au quotidien, en projet comme en formation.',
    groups: {
      frontend: { title: 'Front-end', hint: "Interfaces, animations, accessibilité" },
      backend: { title: 'Back-end', hint: 'API, bases de données, authentification' },
      tools: { title: 'Outils', hint: 'Versioning, conception, gestion de projet' },
      other: { title: 'Autres', hint: 'Mobile, temps réel, déploiement' },
    },
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 5, note: 'Langue maternelle' },
      { name: 'Anglais', level: 4, note: 'Professionnel' },
    ],
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Ce que j’ai construit',
    subtitle: 'Une sélection de projets pro, freelance, personnels et de formation.',
    featured: 'À la une',
    stackLabel: 'Stack',
    items: {
      ateliersangevins: {
        title: 'Ateliers Angevins',
        context: 'Freelance',
        summary:
          "Refonte et modernisation complète du site de l'association des Ateliers Angevins.",
        details: [
          "Espace d'administration permettant de rédiger des articles en Markdown et de créer des événements.",
          'Base de données Neon (Postgres) pilotée avec Prisma, images stockées sur Cloudinary.',
          'Hébergement et déploiement continu sur Netlify.',
        ],
      },
      epheria: {
        title: 'Epheria — PWA de messagerie',
        context: 'Stage · 2 mois',
        summary:
          "Application PWA de messagerie interne connectée au site web de l'entreprise.",
        details: [
          'Système de canaux (groupes), messages privés et notifications push en temps réel.',
          'WebSocket, webhooks et service worker pour le hors-ligne et les notifications.',
          'Back-end connecté en SSO : JWT, API key et clés VAPID.',
          "En parallèle : amélioration du site web existant (React, Next.js, Tailwind, TypeScript).",
        ],
      },
      geoquizz: {
        title: 'GeoQuizz — quiz de géographie',
        context: 'Projet personnel',
        summary:
          'Jeu de géographie en ligne : drapeaux, capitales, pays et régions à retrouver, seul ou à plusieurs.',
        details: [
          "196 pays par zone, combinables (Afrique + Europe…), et les régions des États-Unis, de la France, de l'Espagne et de la Chine. Réponses en français ou en anglais, tolérantes aux fautes de frappe.",
          'PWA installable qui fonctionne hors ligne (service worker), en export statique Next.js sur Vercel, couverte par plus de 200 tests unitaires.',
          'Comptes Supabase (e-mail ou Google), photos de profil et classement en ligne chronométré par le serveur pour limiter la triche.',
          'Salles multijoueur en temps réel : par code ou par lien, salles publiques et « Partie aléatoire ».',
        ],
      },
      'gestion-projet': {
        title: 'Plateforme de gestion de projet',
        context: 'Projet de formation · en autonomie',
        summary:
          'Application collaborative pour créer et piloter des projets avec tâches et discussions.',
        details: [
          'Front-end et back-end réalisés intégralement seul, en architecture MVC.',
          'CRUD complet sur les projets et les tâches, espace de discussion par projet.',
          'Conception de la base de données avec Looping (MCD, MLD, MPD), suivi sur Trello.',
        ],
      },
      'escape-game': {
        title: "Back-office d'escape game",
        context: 'Projet de formation',
        summary: "Outil d'administration complet pour une entreprise d'escape game.",
        details: [
          'CRUD sur les énigmes, les indices et les réservations.',
          'Envoi automatique d’e-mails de confirmation aux clients.',
          'Interface responsive en Bootstrap, base de données MySQL.',
        ],
      },
    },
  },
  path: {
    eyebrow: 'Parcours',
    title: 'Formation & expériences',
    educationTitle: 'Formation',
    experienceTitle: 'Expériences professionnelles',
    sideTitle: 'Autres expériences',
    sideSubtitle: 'Des jobs qui m’ont appris la rigueur, le rythme et la relation client.',
    items: {
      mds: {
        title: 'Bachelor Développement Web (Bac+3)',
        org: 'MyDigitalSchool',
        text: '3ᵉ année de bachelor développement web, en alternance.',
      },
      cefii: {
        title: 'Titre Développeur Web et Web Mobile (Bac+2)',
        org: 'Organisme de formation cefii',
        text: 'Formation full-stack : PHP, JavaScript, MySQL, HTML/CSS, architecture MVC, conception de bases de données.',
      },
      univ: {
        title: 'L1 Licence Mathématiques / Informatique',
        org: "Université d'Angers — Faculté des sciences",
        text: 'Bases en algorithmique, mathématiques et programmation.',
      },
      freelance: {
        title: 'Création de site web — Freelance',
        org: 'Ateliers Angevins',
        text: "Refonte du site de l'association avec espace admin (articles Markdown, événements). React, Next.js, Tailwind, Prisma, Neon, Cloudinary, Netlify.",
      },
      epheria: {
        title: 'Stage développeur web',
        org: 'Epheria · 2 mois',
        text: "Développement d'une PWA de messagerie (canaux, messages privés, notifications push) et amélioration du site web de l'entreprise.",
      },
      centrakor: {
        title: 'Conseiller de vente — rayon saisonnier',
        org: 'Centrakor · week-end',
        text: 'Relation client et vente.',
      },
      station: {
        title: 'Employé polyvalent',
        org: "Station service des Portes d'Angers · vacances",
        text: 'Accueil, encaissement et gestion du point de vente.',
      },
      toque: {
        title: 'Opérateur de production',
        org: 'La Toque Angevine',
        text: 'Travail en ligne de production, cadence et contrôle qualité.',
      },
      mais: {
        title: 'Emploi saisonnier',
        org: 'Castration de maïs',
        text: 'Travail en équipe, en extérieur, sur des journées longues.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'On travaille ensemble ?',
    subtitle:
      "Je cherche une alternance pour l'année 2026-2027 en développement web. Une question, un projet, une opportunité : ma boîte mail est ouverte.",
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    cta: 'M’écrire',
    cvCta: 'Télécharger mon CV',
    copy: 'Copier',
    copied: 'Copié !',
  },
  footer: {
    built: 'Conçu et développé par Noé Fresneau Derouet',
    stack: 'Astro · Tailwind CSS · Motion',
    top: 'Haut de page',
  },
} as const;

/** Elargit les litteraux de `fr` pour que `en` puisse porter d'autres valeurs. */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : { readonly [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof fr>;
