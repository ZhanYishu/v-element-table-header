module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true
  },
  extends: ['standard'],
  rules: {
    'no-func-assign': 'off',
    'space-in-parens': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
