const elementsSizes = {
  xs: '24px',
  sm: '36px',
  base: '48px',
  lg: '60px',
  xl: '72px',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      primary: withOpacity('--primary-rgb'),
      sec: withOpacity('--sec-rgb'),
      red: withOpacity('--red-rgb'),
      green: withOpacity('--green-rgb'),
      blue: withOpacity('--blue-rgb'),
      yellow: withOpacity('--yellow-rgb'),
      white: withOpacity('--white-rgb'),
      black: withOpacity('--black-rgb'),
      l1: withOpacity('--bg1-rgb'),
      l2: withOpacity('--bg2-rgb'),
      l3: withOpacity('--bg3-rgb'),
      default: withOpacity('--default-rgb'),
    },
    screens: {
      xs: 420 + 29.98 + 'px',
      sm: 580 + 29.98 + 'px',
      md: 740 + 29.98 + 'px',
      lg: 1170 + 29.98 + 'px',
      xl: 1366 + 'px',
    },
    container: {
      xs: 420 + 'px',
      sm: 580 + 'px',
      md: 740 + 'px',
      lg: 1170 + 'px',
      xl: 1170 + 'px',
    },

    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },
    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      inputSize: elementsSizes,
      btnSize: elementsSizes,
      spacing: {
        [15]: 15 * 4 / 16 + 'rem',
        [18]: 18 * 4 / 16 + 'rem',
        [50]: 50 * 4 / 16 + 'rem',
        [65]: '16.25rem'
      },
      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.1xl': ['1.5625rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
      },
    },
  },
  plugins: [
    require('@qpokychuk/tailwind-button-plugin'),
    require('@qpokychuk/tailwind-ratio-plugin'),
    require('@qpokychuk/tailwind-input-plugin')({
      border: "1px solid theme('colors.default / 40%')",
    }),
    require('@qpokychuk/tailwind-checkbox-plugin')({
      border: "1px solid theme('colors.default / 40%')",
    }),
  ],
}



function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return 'rgba(var(' + variableName + '), ' + opacityValue + ')'
    }

    return 'rgba(var(' + variableName + '), 1)'
  }
}
