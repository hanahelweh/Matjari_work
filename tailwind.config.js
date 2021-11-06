module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          'bg-primary': '#2b50ed',
          'bg-primary-focus': '#1732ff',
          'bg-primary-content': '#ffffff',
          'bg-secondary': '#ea643a',
          'bg-secondary-focus': '#c94f31',
          'bg-secondary-content': '#ffffff',
          'bg-accent': '#2ed5b9',
          'bg-accent-focus': '#29bca4',
          'bg-accent-content': '#ffffff',
          'bg-neutral': '#3d4451',
          'bg-neutral-focus': '#2a2e37',
          'bg-neutral-content': '#ffffff',
          'bg-base-100': '#ffffff',
          'bg-base-200': '#f9fafb',
          'bg-base-300': '#d1d5db',
          'bg-base-content': '#1e2329',
          'bg-info': '#2094f3',
          'bg-success': '#009485',
          'bg-warning': '#ff9900',
          'bg-error': '#f71561',

      },
      fontFamily:{
        ubuntu:['Ubuntu'],
      },
      screens: {
        mobile: '300',
      },
      spacing:{
        100:'28rem',
        98:'26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
