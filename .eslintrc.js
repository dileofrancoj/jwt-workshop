module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'functions', allow: ['_'] },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
  ignorePatterns: ['.eslintrc.js'],
};
