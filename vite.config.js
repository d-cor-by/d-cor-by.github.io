import { defineConfig } from 'vite'

export default defineConfig({
  root: './src/',
  base: 'https://d-cor.by/',
  build: {
    outDir: '../docs/',
  },
})
