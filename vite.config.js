import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/world-museum-website-deployed/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  
})
