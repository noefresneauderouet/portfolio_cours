import { describe, expect, it } from 'vitest';

import { en } from '../src/i18n/en';
import { fr } from '../src/i18n/fr';
import { alternateHref, localizePath } from '../src/i18n';

/** Tous les chemins de clés d'un dictionnaire : "nav.about", "hero.badge"… */
function keysOf(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return [prefix];
  return Object.entries(value).flatMap(([key, child]) => keysOf(child, prefix ? `${prefix}.${key}` : key));
}

describe('traductions', () => {
  it("l'anglais a exactement les mêmes clés que le français", () => {
    expect(keysOf(en).sort()).toEqual(keysOf(fr).sort());
  });
});

describe('localizePath', () => {
  it('laisse les chemins français sans préfixe', () => {
    expect(localizePath('/', 'fr')).toBe('/');
    expect(localizePath('projets', 'fr')).toBe('/projets');
  });

  it('préfixe les chemins anglais par /en', () => {
    expect(localizePath('/', 'en')).toBe('/en');
    expect(localizePath('/projets', 'en')).toBe('/en/projets');
  });
});

describe('alternateHref', () => {
  it("renvoie vers la page de l'autre langue", () => {
    expect(alternateHref('fr')).toBe('/en/');
    expect(alternateHref('en')).toBe('/');
  });
});
