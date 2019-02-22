module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins:["jest"],
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    'semi': ['error', 'always'],
    'no-extra-semi': 'error',
    'quotes': ['error', 'single'],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
