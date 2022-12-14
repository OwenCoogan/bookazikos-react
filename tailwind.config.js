const theme =  require('./src/components/design-system/theme') ;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          100: '#FFFACC',
          200: '#FFF599',
          300: '#FFEF66',
          400: '#FFEA33',
          500: '#FFE500',
          600: '#DFC800',
          700: '#BFAC00',
          800: '#9F8F00',
          900: '#807200',
        },
        secondary: {
          100: '#F7A6E8',
          200: '#66BAFF',
          300: '#1A97FF',
          400: '#0070CC',
          500: '#004680',
          600: '#003D70',
          700: '#003460',
          800: '#002C50',
          900: '#002340',
        },
        success: {
          100: '#D1F1DE',
          200: '#A4E4BD',
          300: '#76D69C',
          400: '#48C97B',
          500: '#31A55F',
          600: '#2B9053',
          700: '#257C47',
          800: '#1F673B',
          900: '#185330',
        },
        warning: {
          100: '#FFE0CB',
          200: '#FFC197',
          300: '#FFA163',
          400: '#FF822F',
          500: '#FA6400',
          600: '#DB5700',
          700: '#BB4B00',
          800: '#9C3F00',
          900: '#7D3200',
        },
        danger: {
          100: '#F9D2D2',
          200: '#F3A6A6',
          300: '#EC7979',
          400: '#E64D4D',
          500: '#E02020',
          600: '#C51B1B',
          700: '#A91717',
          800: '#8C1414',
          900: '#701010',
        },
        grey: {
          100: '#DFE4E8',
          200: '#BFC9D1',
          300: '#A0ADBA',
          400: '#8092A3',
          500: '#637789',
          600: '#576878',
          700: '#4A5967',
          800: '#3E4A56',
          900: '#323B45',
        },
        ghost: {
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#DADADA',
          400: '#CCCCCC',
          500: '#BFBFBF',
          600: '#B3B3B3',
          700: '#A6A6A6',
          800: '#999999',
          900: '#8C8C8C',
        },
        dark: '#011425',
        light: '#FCFEFF',
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|rounded)-(primary|secondary|tertiary|success|warning|danger|full|sm|md|lg)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
