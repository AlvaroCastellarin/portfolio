// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-alvaro-castellarin.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
