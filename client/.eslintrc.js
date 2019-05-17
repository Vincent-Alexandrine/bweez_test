module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'react',
    'jest'
  ],
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    "react/display-name": [0],
    "curly": ["error", "multi-or-nest"],
    "dot-location": ["error", "property"],
    "eqeqeq": ["error", "always"],
    "lines-between-class-members": ["error", "always"],
    "max-classes-per-file": ["error", 1],
    "no-multi-spaces": [2],
    "no-trailing-spaces": ["error", { "ignoreComments": true }],
    "key-spacing": [2],
    "space-infix-ops": [2],
    "space-in-parens": ["error", "never"],
    "keyword-spacing": ["error", { "before": true, "after": true }]
  }
};
