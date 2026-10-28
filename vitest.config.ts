/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// La config Vite d'Astro : les tests savent lire les fichiers .astro.
export default getViteConfig({
  test: {
    include: ['tests/**/*.test.ts'],
  },
});
