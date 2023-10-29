import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '"http://lucianogelvez.github.io/Formulario-with-formik-yup-materialUI-reactRouterDom/"'
})
