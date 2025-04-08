import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/.", // your repo name  base: "/myPortfolio"
  plugins: [react()],
})
