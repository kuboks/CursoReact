import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CursoReact/docs/reforzamiento/',  // ajusta según tu repo y carpeta
  build: {
    outDir: 'dist',
  },
})