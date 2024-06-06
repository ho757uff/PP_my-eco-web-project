module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
  },
  rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
  },
};
