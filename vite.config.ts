import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    dirStyle: 'flat', // dist/privacidade.html → servido em /privacidade
    formatting: 'none',
    // O CSS inteiro (~8 KB comprimido) é embutido no HTML pelo scripts/postbuild.mjs
    beastiesOptions: false,
  },
})
