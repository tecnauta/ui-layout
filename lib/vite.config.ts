import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.tsx',
      name: '@eduzz/ui-layout',
      formats: ['es', 'umd'],
      fileName: format => `ui-layout.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'use-context-selector'],
      output: {
        exports: 'named',
        globals: {
          'react': 'react',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  plugins: [react(), cssInjectedByJsPlugin({ topExecutionPriority: true }), dts({ copyDtsFiles: true })]
});
