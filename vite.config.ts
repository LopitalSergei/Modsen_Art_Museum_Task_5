import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      // "@types": "/src/types",
      '@api': '/src/api',
    },
  },
});
