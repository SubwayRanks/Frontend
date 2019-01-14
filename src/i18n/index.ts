module.exports = {
  locale: window.localStorage.getItem('locale') || 'ru',
  fallbackLocale: 'en',
  fallbackRoot: true,
  messages: {
    en: require('./en'),
    ru: require('./ru'),
  }
};
