import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Deployed on Vercel, which serves the site from the domain root, so base
// must be "/" for both dev and production builds.
export default defineConfig({
  plugins: [react()],
  base: "/"
})
