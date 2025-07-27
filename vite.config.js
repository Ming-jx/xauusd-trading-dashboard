import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Use './' if you're deploying to a subdirectory or static host
  plugins: [react()],
})
