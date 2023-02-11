/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: [
        '14px',
        {
          lineHeight: '25px',
          fontWeight: '300',
        },
      ],
      lg: [
        '11px',
        {
          lineHeight: '25px',
          letterSpacing: '1px',
          fontWeight: '700',
        },
      ],
      '2lg': [
        '12px',
        {
          lineHeight: '25px',
          letterSpacing: '2.6px',
          fontWeight: '700',
        },
      ],
      xl: [
        '40px',
        {
          lineHeight: '52px',
          letterSpacing: '-1.5px',
          fontWeight: '500',
        },
      ],
      '2xl': [
        '80px',
        {
          lineHeight: '103px',
          fontWeight: '500',
        },
      ],
    },
    fontFamily: {
      antonio: ['Antonio', 'sans-serif'],
      spartan: ['League Spartan', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      blueBG: '#070724',
      greyDark: '#38384F',
      greyLight: '#838391',
      cyan: '#419EBB',
      yellow: '#EDA249',
      purple: '#6f2ed6',
      orange: '#D14C32',
      red: '#D83A34',
      brown: '#CD5120',
      green: '#1ec2a4',
      blue: '#2d68f0',
    },
    extend: {},
  },
  plugins: [],
};
