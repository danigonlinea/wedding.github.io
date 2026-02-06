import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), svgLoader(), viteCompression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
