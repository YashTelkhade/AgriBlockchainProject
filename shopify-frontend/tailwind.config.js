module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    '/flowbite-react/**/*.{js,jsx,ts,tsx}',
    '/flowbite/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}