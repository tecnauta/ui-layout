import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '.',
    cssCodeSplit: true,
    lib: {
      entry: './index.tsx',
      name: '@eduzz/ui-layout',
      formats: ['es'],
      fileName: format => `ui-layout.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'use-context-selector'],
      output: {
        preserveModules: true,
        preserveModulesRoot: '.',
        inlineDynamicImports: false,
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        exports: 'named',
        globals: {
          'react': 'react',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      topExecutionPriority: true,
      relativeCSSInjection: true
    }),
    dts({ copyDtsFiles: true })
  ]
});