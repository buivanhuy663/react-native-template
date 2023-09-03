module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 0,
        'react-native/no-inline-styles': 0,
        semi: ['error', 'never'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'quote-props': ['error', 'consistent-as-needed'],
        'no-debugger': 'error',
        'no-console': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
