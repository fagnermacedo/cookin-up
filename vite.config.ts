import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//Resolvendo o problema de DNS, para obter a lista via JSON, site externo.
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
