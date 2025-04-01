import { NativeSelect } from '@/components/ui';
import { useTrans } from '@/hooks';
import { useStoreGlobal } from '@/stores';

import { locales } from '../../configs';

export const LocaleSwitcher = () => {
    const { locale, setLocale } = useStoreGlobal();
    const { t } = useTrans(['form']);

    const locales_options = locales.list.map((locale) => ({
        label: t(`options.locales.${locale.code}`, { ns: 'form' }),
        value: locale.code,
    }));

    const handleChangeLocale = (newLocale: string) => {
        setLocale(newLocale);
    };

    return (
        <NativeSelect
            data={locales_options}
            size="xs"
            value={locale}
            onChange={(e) => handleChangeLocale(e.target.value)}
        />
    );
};
