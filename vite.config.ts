import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PBO-Squad-ToDo/',
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'logo-512x512.png', 'logo.svg', 'src/assets/*.svg', 'src/assets/*.png'],
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
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/assets\/.*\.svg$/, // Regular expression to match SVG files in assets folder
            handler: 'CacheFirst',
            options: {
              cacheName: 'svg-icons',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 Days
              },
            },
          },
        ],
      }

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
