/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js", // ✅ for core flowbite
  "./node_modules/flowbite-react/**/*.js", 
];
export const theme = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin') 
];
