module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'linebreak-style': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'max-len': ['error', { code: 200 }],
    'prettier/prettier': ['error', { printWidth: 120 }],
    'import/no-extraneous-dependencies': 0,
    'new-cap': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
