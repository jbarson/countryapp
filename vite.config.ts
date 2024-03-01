import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://restcountries.com/v3.1/all',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }

})
