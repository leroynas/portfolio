module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 500ms infinite',
      },
    },
  },
  plugins: [],
};
