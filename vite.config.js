import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // default port, change if needed
    open: true, // automatically opens in browser
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // ensures pre-bundling for these deps
  },
  build: {
    outDir: 'dist',
  },
})

