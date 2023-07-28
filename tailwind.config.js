import createTheme from '@eduzz/ui-tailwind-theme';

export default createTheme({
  prefix: 'uizz-layout-',
  content: ['./index.html', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        overlay: 'fade 200ms linear'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  corePlugins: {
    preflight: false
  }
});
