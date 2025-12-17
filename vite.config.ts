import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CTES-CHILE/', // IMPORTANTE: Debe coincidir con el nombre de tu repositorio en GitHub
  build: {
    outDir: 'dist',
  }
});