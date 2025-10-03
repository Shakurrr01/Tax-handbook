import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Tax-handbook/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
