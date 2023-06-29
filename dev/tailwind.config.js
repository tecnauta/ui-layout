/* eslint-disable @typescript-eslint/no-require-imports */
const libConfig = require('../lib/tailwind.config');

/** @type {import('tailwindcss').Config} */
export default {
  ...libConfig,
  content: ['./index.html', '../lib/**/*.{ts,tsx}']
};
