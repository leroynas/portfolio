module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '100%': { opacity: '0' },
        },
        increase: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        blink: 'blink 500ms infinite',
        increase: 'increase 1s forwards',
        'slide-in': 'slide-in 1s forwards',
      },
    },
  },
  plugins: [],
};
