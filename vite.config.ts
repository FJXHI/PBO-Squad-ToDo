import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PBO-Squad-ToDo/app',
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        'favicon.ico',
        'logo-512x512.png',
        'logo.svg',
        'assets/*.svg',
        'assets/*.png'
      ],
      manifest: {
        name: 'PBO-ToDo',
        short_name: 'PBO-ToDo',
        description: 'ToDo App made by humans with love to web development',
        theme_color: '#000',
        icons: [
          {
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
