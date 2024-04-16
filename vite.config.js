import { defineConfig } from 'vite'
import fileURLToPath from 'url'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 3000
  },
  resolve : {
    alias : [
      { find: "@carusel", replacement: path.resolve(__dirname, 'public/img/Carusel') }
    ]
  }
})
