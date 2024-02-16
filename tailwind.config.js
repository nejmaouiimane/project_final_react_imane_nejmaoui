
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
        'slide3' : "url('/src/assets/img/master-slide-04.jpg')",
        'dresses': "url(/src/assets/img/banner-02.jpg)",
        'sunglasses': "url(/src/assets/img/banner-05.jpg)",
        'watch': "url(/src/assets/img/banner-03.jpg)",
        'footwear': "url(/src/assets/img/banner-07.jpg)",
        'bag': "url(/src/assets/img/banner-10.jpg)",
        'accessoire': "url(/src/assets/img/banner-09.jpg)",
        'pic4': "url(/src/assets/img/bg-video-01.jpg)",
        'pic5': "url(/src/assets/img/shop-item-09.jpg)",
        'heading': "url(/src/assets/img/heading-pages-02.jpg)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


