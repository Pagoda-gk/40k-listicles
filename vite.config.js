import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',   // keeps cache fresh
      manifest: {
        name: "Listicles Army List Builder",
        short_name: "Listicles",
        start_url: ".",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#4caf50",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  server: {
    host: 'localhost', // or `true` for 0.0.0.0 if you want LAN access
    port: 5173
  }
})