export default {
  locale: window.localStorage.getItem('locale') || 'ru',
  fallbackLocale: 'en',
  fallbackRoot: true,
  messages: {
    en: require('./en').default,
    ru: require('./ru').default,
  }
};
