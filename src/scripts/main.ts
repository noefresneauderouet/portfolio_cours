/**
 * Animations du portfolio.
 *
 * On utilise `motion/mini` (~3 ko) plutot que le paquet complet : il s'appuie
 * sur la Web Animations API du navigateur. Consequence : pas de raccourcis
 * `x` / `y` / `rotate`, on anime la propriete `transform` directement.
 */
import { animate } from 'motion/mini';
import { inView } from 'motion';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* ------------------------------------------------------------------ */
/*  Reveal au scroll                                                   */
/* ------------------------------------------------------------------ */
function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;

  if (prefersReducedMotion) {
    targets.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  targets.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], transform: ['translateY(26px)', 'translateY(0px)'] },
          { duration: 0.75, ease: EASE_OUT_EXPO },
        );

        el.querySelectorAll<HTMLElement>('[data-reveal-child]').forEach((child, index) => {
          animate(
            child,
            { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0px)'] },
            { duration: 0.6, delay: 0.1 + index * 0.06, ease: EASE_OUT_EXPO },
          );
        });
      },
      { amount: 0.15, margin: '0px 0px -8% 0px' },
    );
  });
}

/* ------------------------------------------------------------------ */
/*  Animation d'entree du hero                                         */
/* ------------------------------------------------------------------ */
function initHero() {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-hero-letter]').forEach((letter, index) => {
    animate(
      letter,
      {
        opacity: [0, 1],
        transform: ['translateY(0.55em) rotate(4deg)', 'translateY(0em) rotate(0deg)'],
      },
      { duration: 0.9, delay: index * 0.032, ease: EASE_OUT_EXPO },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-hero-fade]').forEach((el, index) => {
    animate(
      el,
      { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.45 + index * 0.09, ease: EASE_OUT_EXPO },
    );
  });
}

/* ------------------------------------------------------------------ */
/*  Curseur personnalise                                               */
/* ------------------------------------------------------------------ */
function initCursor() {
  if (isCoarsePointer || prefersReducedMotion) return;

  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let visible = false;

  window.addEventListener(
    'pointermove',
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (!visible) {
        visible = true;
        document.documentElement.classList.add('cursor-ready');
      }
    },
    { passive: true },
  );

  const loop = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  const interactive = 'a, button, [data-cursor="hover"], input, textarea, summary';
  document.addEventListener('pointerover', (event) => {
    const target = event.target as Element | null;
    if (target?.closest?.(interactive)) ring.classList.add('is-hovering');
  });
  document.addEventListener('pointerout', (event) => {
    const target = event.target as Element | null;
    if (target?.closest?.(interactive)) ring.classList.remove('is-hovering');
  });

  document.addEventListener('pointerleave', () => {
    document.documentElement.classList.remove('cursor-ready');
    visible = false;
  });
}

/* ------------------------------------------------------------------ */
/*  Barre de progression + etat de la nav                              */
/* ------------------------------------------------------------------ */
function initScrollUi() {
  const bar = document.querySelector<HTMLElement>('.progress-bar');
  const header = document.querySelector<HTMLElement>('[data-header]');
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.transform = `scaleX(${ratio})`;
    if (header) header.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/* ------------------------------------------------------------------ */
/*  Lien de nav actif                                                  */
/* ------------------------------------------------------------------ */
function initActiveSection() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  if (!links.length) return;

  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
    .filter((el): el is HTMLElement => Boolean(el));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('text-body', active);
          link.classList.toggle('text-muted', !active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ------------------------------------------------------------------ */
/*  Halo qui suit la souris sur les cartes                             */
/* ------------------------------------------------------------------ */
function initSpotlight() {
  if (isCoarsePointer) return;

  document.querySelectorAll<HTMLElement>('.spotlight').forEach((card) => {
    card.addEventListener(
      'pointermove',
      (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      },
      { passive: true },
    );
  });
}

/* ------------------------------------------------------------------ */
/*  Boutons magnetiques                                                */
/* ------------------------------------------------------------------ */
function initMagnetic() {
  if (isCoarsePointer || prefersReducedMotion) return;

  const REST = 'translate3d(0px, 0px, 0px)';

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.28;

    el.addEventListener(
      'pointermove',
      (event) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * strength;
        const y = (event.clientY - rect.top - rect.height / 2) * strength;
        el.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      },
      { passive: true },
    );

    el.addEventListener('pointerleave', () => {
      const from = el.style.transform || REST;
      animate(el, { transform: [from, REST] }, { duration: 0.6, ease: EASE_OUT_EXPO });
      el.style.transform = REST;
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Menu mobile                                                        */
/* ------------------------------------------------------------------ */
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('pointer-events-none', !open);
    panel.classList.toggle('opacity-0', !open);
    panel.classList.toggle('-translate-y-2', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
}

/* ------------------------------------------------------------------ */
/*  Copier l'e-mail                                                    */
/* ------------------------------------------------------------------ */
function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    const idle = button.dataset.labelIdle ?? 'Copy';
    const done = button.dataset.labelDone ?? 'Copied';
    const output = button.querySelector<HTMLElement>('[data-copy-label]') ?? button;

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy ?? '');
        output.textContent = done;
        button.classList.add('text-cyan');
        window.setTimeout(() => {
          output.textContent = idle;
          button.classList.remove('text-cyan');
        }, 1800);
      } catch {
        /* presse-papiers indisponible : on ne casse rien */
      }
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Init                                                               */
/* ------------------------------------------------------------------ */
function init() {
  initReveal();
  initHero();
  initCursor();
  initScrollUi();
  initActiveSection();
  initSpotlight();
  initMagnetic();
  initMobileMenu();
  initCopy();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
