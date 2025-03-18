import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`../locales/${language}/${namespace}.json`)))
    .init({
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        lng: 'fa',
    });

export default i18n;
