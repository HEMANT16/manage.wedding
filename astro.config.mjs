// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manage.wedding',
  trailingSlash: 'always',
  redirects: {
    '/wedding-diy-photo-booth-calculator': '/wedding-photo-booth-calculator',
    '/diy-photo-booth-calculator': '/wedding-photo-booth-calculator',
    '/photo-booth-calculator': '/wedding-photo-booth-calculator',
    '/wedding-transportation-calculator': '/wedding-shuttle-bus-calculator',
    '/wedding-bus-calculator': '/wedding-shuttle-bus-calculator',
    '/wedding-coffee-calculator': '/wedding-coffee-bar-calculator',
  },
  vite: {
    server: {
      watch: {
        ignored: [
          '**/node_modules/**',
          '**/dist/**',
          '**/.git/**',
          '**/public/**',
          '**/.astro/**',
          '**/scratch/**'
        ]
      }
    },
    build: {
      rollupOptions: {
        maxParallelFileOps: 50
      }
    }
  }
});
