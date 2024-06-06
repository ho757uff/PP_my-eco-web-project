module.exports = {
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {}
};
