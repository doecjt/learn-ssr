import { defineConfig } from 'tsup'

export default defineConfig([
  {
    env: {
      NODE_ENV: 'production',
    },
    entry: [
      './client/client.jsx',
    ],
    format: 'iife',
  },
  {
    entry: [
      './server/server.js',
    ],
    format: 'esm',
  },
])
