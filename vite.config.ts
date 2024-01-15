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
      },
      workbox: {
        // Define runtime caching rules
        runtimeCaching: [
          {
            // Apply a network-first strategy for docs
            urlPattern: /^\/docs\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'docs-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60 // 1 day
              },
              networkTimeoutSeconds: 10 // fallback to cache if no response within 10 seconds
            }
          },
          {
            // Default caching strategy for other requests (e.g., images, static files)
            urlPattern: /\/.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
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
