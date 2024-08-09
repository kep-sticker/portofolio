/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: ['#fb923c'],
        dark: ''
      },
    },
  },
  _plugins: [],
  get plugins() {
    return this._plugins;
  },
  set plugins(value) {
    this._plugins = value;
  },
}

