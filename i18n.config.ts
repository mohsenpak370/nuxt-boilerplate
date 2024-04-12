export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'prefix_except_default',
  defaultLocale: 'en',
  locale: 'en',
  locales: [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'fr',
      name: 'Français',
    },
  ],
  messages: {
    en: {
      welcome: 'Welcome',
    },
    fr: {
      welcome: 'Bienvenue',
    },
  },
}));
