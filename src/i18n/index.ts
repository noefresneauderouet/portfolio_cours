import { fr, type Dict } from './fr';
import { en } from './en';

export type Lang = 'fr' | 'en';

export const languages: Lang[] = ['fr', 'en'];
export const defaultLang: Lang = 'fr';

const dictionaries: Record<Lang, Dict> = { fr, en };

export function useTranslations(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Prefixe une URL interne avec la locale courante ("/" pour le FR). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/** URL de la meme page dans l'autre langue. */
export function alternateHref(lang: Lang): string {
  return lang === 'fr' ? '/en/' : '/';
}

export type { Dict };
