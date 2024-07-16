import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
    },
  },
  assetsInclude: ['**/*.lottie'],
})