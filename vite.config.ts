import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    manifest: true,
  },
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-typescript',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    macrosPlugin(),
  ],
  base: '/coffee-delivery/',
})
