import '../../services/intl.service';

import { locale as dayjsLocale } from 'dayjs';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { locales } from '@/configs';
import { useStoreGlobal } from '@/stores';

export const IntlProvider = ({ children }: PropsWithChildren) => {
    const { locale, setLocale } = useStoreGlobal();
    const { i18n } = useTranslation();

    if (!localStorage.getItem('locale')) {
        setLocale(locales.default);
    }

    const updateTextDirection = (locale: string) => {
        const locale_obj = locales.list.find((l) => l.code === locale);
        const direction = locale_obj?.dir || 'ltr';
        document.documentElement.setAttribute('lang', locale_obj?.code || locale);
        document.documentElement.setAttribute('dir', direction);
    };

    useEffect(() => {
        localStorage.setItem('locale', locale);
        i18n.changeLanguage(locale);
        updateTextDirection(locale);
        dayjsLocale(locale);
    }, [locale]);

    return children;
};
