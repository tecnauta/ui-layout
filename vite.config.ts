import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

import packageJson from './package.json';

const external = ['react/jsx-runtime']
  .concat(Object.keys(packageJson.dependencies))
  .concat(Object.keys(packageJson.devDependencies));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '.',
    sourcemap: true,
    lib: {
      entry: './index.tsx',
      name: '@eduzz/ui-layout',
      formats: ['es'],
      fileName: format => `ui-layout.${format}.js`
    },
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: '.',
        inlineDynamicImports: false,
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
        exports: 'named',
        globals: external.reduce((acc, e) => ({ ...acc, [e]: e }), {})
      }
    }
  },
  plugins: [react(), cssInjectedByJsPlugin({ topExecutionPriority: true }), dts({ copyDtsFiles: true })]
});
