module.exports = {
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en', 'it'],
    },
    backend: {
        projectId: process.env.LSS_WEBSITE_TEST_LOCIZE_PROJECT_ID,
        apiKey: process.env.LSS_WEBSITE_TEST_LOCIZE_API_KEY,
        referenceLng: 'de',
    },
    use: [require('i18next-locize-backend/cjs')],
    ns: ['common', 'homepage'], // the namespaces needs to be listed here, to make sure they got preloaded
    serializeConfig: false, // because of the custom use i18next plugin
    saveMissing: true, // to not saveMissing to true for production
};
