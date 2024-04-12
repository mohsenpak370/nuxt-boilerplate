// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/variables.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/eslint-module', 'nuxt-svgo', '@nuxtjs/color-mode'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  eslint: {
    lintOnStart: false,
  },
});
