module.exports = {
  root: true,
  env: { browser: true, es2020: true, es2021: true, node: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/extensions": "off",
    "object-curly-spacing": ["error", "never"],
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
    "react/jsx-one-expression-per-line": "off",
    "import/no-absolute-path": "off",
    "import/no-unresolved": "off",
  },
};
