const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript'
  ],
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    // import related
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // react
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    // code style
    'max-len': ['warn', {
      code: 150,
      // will ignore everything inside html attrs
      ignorePattern: '[\\w-]+="([^"]*)"',
    }],
    'no-underscore-dangle': 'off',
    'func-names': 'off',
  },
}
