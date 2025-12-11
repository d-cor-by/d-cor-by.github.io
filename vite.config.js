import { defineConfig } from 'vite'

export default defineConfig({
  root: './src/',
  base: 'https://d-cor-by.github.io/',
  build: {
    outDir: '../docs/',
  },
})
