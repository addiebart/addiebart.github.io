// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    "/calculator": "https://github.com/addiebart/eecs348-project",
    "/gitsmart": "https://github.com/git-smart-hackkstate/git-smart",
    "/spaceworld": "/spaceworld2000",
    "/github": "https://github.com/addiebart",
    "/linkedin": "https://www.linkedin.com/in/addison-bartelli",
    "/jukeboxd": "https://github.com/hwolong/jukeboxd",
    "/musicboard": "https://github.com/hwolong/jukeboxd",
    "/schedulebuilder": "https://github.com/Elizabeth-327/schedulebuilder",
  },
});