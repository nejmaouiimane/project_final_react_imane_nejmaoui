
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/img/heading-pages-06.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'slide1' : "url('/src/assets/img/master-slide-01.jpg')",
        'slide2' : "url('/src/assets/img/master-slide-02.jpg')",
        'slide3' : "url('/src/assets/img/master-slide-03.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


