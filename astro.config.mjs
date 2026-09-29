// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-alvaro-castellarin.onrender.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
