module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  // add your custom rules here
  rules: {
    'semi': ['error', 'never'],
    'no-extra-semi': 'error',
    'quotes': ['error', 'single'],
  }
}
