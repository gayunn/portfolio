import { defineConfig } from 'vite'

export default defineConfig({
  
  root: "src/markup/",
  build: {
      outDir: "../public",
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/_variables";' 
      }
    }
  }
});