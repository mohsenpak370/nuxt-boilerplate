import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import nuxtEslint from '@nuxt/eslint-config';

export default [
  js.configs.recommended,
  // customConfig,
  // myConfig,
  {
    plugins: {
      nuxt: nuxtEslint,
      'eslint-plugin-prettier': eslintPluginPrettier,
    },
    rules: {
      semi: ['warn', 'always'],
    },
    ignores: ['.nuxt/**/*'],
    // ...other config
  },
];
