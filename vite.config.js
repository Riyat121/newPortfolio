import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/myPortfolio", // your repo name
  plugins: [react()],
})
