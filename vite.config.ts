import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Cambiado a './' para que funcione independientemente de la subcarpeta de GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
