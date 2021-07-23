module.exports = {
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      inset: {
        '1/2': '50%'
      },
      spacing: {
        108: '38rem',
        112: '44rem',
        128: '58rem'
      },
      colors: {
        secondary: {
          50: '#fffdfc',
          100: '#fefbf9',
          200: '#fdf5f1',
          300: '#fbefe9',
          400: '#f9e4d8',
          500: '#F6D8C7',
          600: '#ddc2b3',
          700: '#b9a295',
          800: '#948277',
          900: '#796a62'
        },
        primary: {
          50: '#f4f6f6',
          100: '#e9eeed',
          200: '#c9d4d3',
          300: '#a8bab8',
          400: '#678783',
          500: '#26534E',
          600: '#224b46',
          700: '#1d3e3b',
          800: '#17322f',
          900: '#132926'
        },
        'bg-opacity': 'rgba(0,0,0,0.5)'
      },
      fontFamily: {
        display: ['Inria Serif', 'sans-serif'],
        body: ['Avenir', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      borderColor: ['group-hover'],
      textColor: ['group-hover'],
      transform: ['group-hover'],
      opacity: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
