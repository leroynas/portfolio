module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '100%': { background: 'transparent' },
        },
      },
      animation: {
        blink: 'blink 500ms infinite',
      },
    },
  },
  plugins: [],
};
