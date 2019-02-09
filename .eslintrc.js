module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: ['plugin:prettier/recommended', 'airbnb'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': 0
  }
};
