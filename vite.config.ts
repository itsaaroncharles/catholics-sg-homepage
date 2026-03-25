import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Resolves Figma Make's `figma:asset/<hash>.<ext>` imports to Figma's CDN URL
function figmaAssetsPlugin(): Plugin {
  return {
    name: 'figma-assets',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return '\0' + id
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        const assetPath = id.slice('\0figma:asset/'.length) // e.g. "abc123.png"
        const hash = assetPath.replace(/\.[^.]+$/, '')     // strip extension
        const url = `https://figma-alpha-api.s3.us-west-2.amazonaws.com/img/${hash}`
        return `export default ${JSON.stringify(url)};`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetsPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.mp4'],
})
