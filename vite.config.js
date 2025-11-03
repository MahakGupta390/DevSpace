import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //  base: "/DevSpace/",
  //  base: process.env.NODE_ENV === 'production' ? '/DevSpace/' : '/',
  //  build: {
  //   outDir: 'dist',
  // },
  //  build: {
  //     outDir: 'dist',
  //     assetsDir: 'assets',
  //   },
})
