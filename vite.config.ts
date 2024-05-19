import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 80 },
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@store': resolve(__dirname, './src/store'),
      '@atoms': resolve(__dirname, './src/components/atoms'),
      '@pages': resolve(__dirname, './src/components/pages'),
      '@components': resolve(__dirname, './src/components'),
      '@molecules': resolve(__dirname, './src/components/molecules'),
      '@organisms': resolve(__dirname, './src/components/organisms'),
    },
  },
});
