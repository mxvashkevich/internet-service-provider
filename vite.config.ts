import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@store': '/src/store',
      '@atoms': '/src/components/atoms',
      '@molecules': '/src/components/molecules',
      '@organisms': '/src/components/organisms',
      '@pages': '/src/components/pages',
    },
  },
});
