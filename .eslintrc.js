module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true, // Устанавливает одинарные кавычки для Prettier
      },
    ],
    'quotes': ['error', 'single'], // Устанавливает одинарные кавычки для ESLint
    'semi': ['error', 'always'], 
  },
};
