/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "baseui"],
  rules: {
    "baseui/deprecated-theme-api": "warn",
    "baseui/deprecated-component-api": "warn",
    "baseui/no-deep-imports": "warn",
  },
};
