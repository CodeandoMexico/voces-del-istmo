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
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
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
