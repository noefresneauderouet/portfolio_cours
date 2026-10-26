# Portfolio — Noé Fresneau Derouet

Portfolio one-page bilingue (FR / EN), thème sombre avec dégradés animés.

**Stack :** [Astro 7](https://astro.build) · [Tailwind CSS v4](https://tailwindcss.com) · [Motion](https://motion.dev) · polices auto-hébergées (Inter + Space Grotesk)

Le site est 100 % statique : quasiment aucun JavaScript n'est envoyé au navigateur en dehors des animations.

---

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # prévisualise le build
```

---

## Structure

```
src/
├─ data/profile.ts        Infos non traduisibles : liens, technos, dates, projets
├─ i18n/
│  ├─ fr.ts               Tous les textes en français (source de vérité)
│  ├─ en.ts               La même structure en anglais
│  └─ index.ts            Helpers de traduction
├─ layouts/Base.astro     <head>, SEO, OpenGraph, JSON-LD, fond animé
├─ components/
│  ├─ Nav.astro           Header + menu mobile + switch FR/EN
│  ├─ Hero.astro          Nom animé lettre par lettre + bandeau défilant
│  ├─ About.astro         Profil, photo, chiffres clés, soft skills
│  ├─ Skills.astro        Compétences par catégorie + niveaux de langue
│  ├─ Projects.astro      Cartes projets avec halo qui suit la souris
│  ├─ Timeline.astro      Formation, expériences pro, autres expériences
│  ├─ Contact.astro       CTA, coordonnées, copie de l'e-mail
│  └─ Footer.astro
├─ scripts/main.ts        Animations : reveal, curseur, magnétisme, progression
├─ styles/global.css      Tokens de couleur, aurora, grain, keyframes
└─ pages/
   ├─ index.astro         Version FR  ->  /
   ├─ en/index.astro      Version EN  ->  /en/
   └─ 404.astro
```

**Pour modifier un texte :** tout est dans `src/i18n/fr.ts` et `src/i18n/en.ts`. Les deux fichiers ont exactement la même forme — TypeScript signale toute clé manquante.

---

## À faire avant de publier

### 1. Ajouter ta photo (optionnel)

Dépose une image dans `public/photo.jpg` (format portrait, ~640×800 px).
Si le fichier est absent, un monogramme dégradé « NFD » s'affiche automatiquement à la place — rien ne casse.

### 2. Ajouter ton CV

Dépose le PDF dans `public/cv-noe-fresneau-derouet.pdf`.
Les boutons « CV » de la nav et du contact pointent déjà dessus (chemin défini dans `src/data/profile.ts`).

### 3. Ajouter des liens sur les projets

Dans `src/data/profile.ts`, chaque projet accepte un tableau `links` :

```ts
{
  id: 'ateliersangevins',
  year: '2026',
  accent: 'violet',
  featured: true,
  links: [
    { label: 'Voir le site', href: 'https://…' },
    { label: 'Code source', href: 'https://github.com/…' },
  ],
  stack: [...],
}
```

Sans `links`, aucune ligne de liens ne s'affiche.

### 4. Renseigner ton vrai domaine

Une fois déployé, remplace l'URL dans **deux** endroits :

- `astro.config.mjs` → la constante `SITE`
- `public/robots.txt` → la ligne `Sitemap:`

C'est ce qui alimente l'URL canonique, les balises `hreflang`, l'OpenGraph et le sitemap.

### 5. Régénérer l'image de partage (si tu changes le texte)

`public/og.png` est l'aperçu affiché sur LinkedIn, Slack, Discord… Il est généré depuis `public/og.svg` :

```bash
node -e "require('sharp')('public/og.svg',{density:200}).resize(1200,630,{fit:'fill'}).png().toFile('public/og.png').then(()=>console.log('ok'))"
```

(`sharp` est déjà présent, installé avec Astro.)

---

## Déployer sur Vercel

1. Pousse le dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com) → **Add New… → Project** → importe le dépôt.
3. Vercel détecte Astro tout seul : framework `Astro`, build `npm run build`, output `dist`. Ne touche à rien.
4. **Deploy.**

Chaque `git push` sur la branche principale redéploie automatiquement.

Pour brancher un nom de domaine : **Project → Settings → Domains**.

---

## Détails d'implémentation

**Bilingue.** Routing i18n natif d'Astro : `/` en français, `/en/` en anglais, sans préfixe sur la langue par défaut. Le bouton FR/EN du header est un simple lien — zéro JavaScript, et les deux versions sont indexées séparément avec les bonnes balises `hreflang`.

**Animations.** `src/scripts/main.ts` gère le reveal au scroll (Motion + `inView`), le curseur personnalisé, les boutons magnétiques, le halo des cartes, la barre de progression et le lien de nav actif. Le fond aurora, le grain et le bandeau défilant sont en CSS pur.

**Accessibilité.** `prefers-reduced-motion` désactive toutes les animations, le curseur personnalisé et le grain. Sans JavaScript, le contenu reste entièrement visible (l'état initial du reveal n'est posé que si la classe `js` est présente). Lien d'évitement, focus visible, contrastes vérifiés sur fond sombre.

**Performance.** Aucune requête vers un service externe : polices, images et scripts sont tous servis depuis ton domaine.
