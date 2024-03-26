import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/test/',
  root:"src",
  plugins: [vue()],
  server: { fs: { deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret'] } }
})

