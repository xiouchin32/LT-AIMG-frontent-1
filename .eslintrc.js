module.exports = {
  'extends': 'next/core-web-vitals',
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'semi': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'never'],
    'space-infix-ops': ['error', {'int32Hint': false}],
    'eol-last': ['error', 'always']
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
      rules: {
      }
    }
  ],
  ignorePatterns: ['node_modules/']
}
