import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root:"src",
  build: {
    outDir: '../dist',
  },
  plugins: [vue()],
  server: { 
    fs: { deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret'] },
    proxy: {
      '/CatAPI': {
        target: 'http://localhost:5000', // Change this to your backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/CatAPI/, '')
      }
    }
  }
})

