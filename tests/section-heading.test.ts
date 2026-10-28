import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';

import SectionHeading from '../src/components/SectionHeading.astro';

/** Rend le composant en HTML, comme au build. */
async function render(props: Record<string, string>) {
  const container = await AstroContainer.create();
  return container.renderToString(SectionHeading, { props });
}

describe('SectionHeading', () => {
  it('affiche le numéro, le sur-titre et le titre', async () => {
    const html = await render({ index: '01', eyebrow: 'À propos', title: 'Qui je suis' });
    expect(html).toContain('01');
    expect(html).toContain('À propos');
    expect(html).toMatch(/<h2[^>]*>\s*Qui je suis\s*<\/h2>/);
  });

  it('affiche le sous-titre quand il est donné', async () => {
    const html = await render({ index: '02', eyebrow: 'Projets', title: 'Mes projets', subtitle: 'Une sélection' });
    expect(html).toContain('<p');
    expect(html).toContain('Une sélection');
  });

  it("n'affiche pas de paragraphe sans sous-titre", async () => {
    const html = await render({ index: '02', eyebrow: 'Projets', title: 'Mes projets' });
    expect(html).not.toContain('<p');
  });
});
