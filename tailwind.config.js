/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#e2e8f0',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')(), // Change this line
  ],
  presets: [
    // Add a preset for postcss-preset-env
    [
      'postcss-preset-env',
      {
        stage: 0,
        features: {
          'nesting-rules': true, // Enable nesting
          'apply-custom-properties': true, // Enable @apply
        },
      },
    ],
  ],
};
