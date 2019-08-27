module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true
  },
  extends: ['standard'],
  rules: {
    'space-in-parens': [1, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
