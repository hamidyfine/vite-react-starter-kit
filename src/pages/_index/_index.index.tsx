import { useTranslation } from 'react-i18next';

import { createFileRoute } from '@/router';

export const Route = createFileRoute('/_index/_index/')({
    component: Home,
});

function Home() {
    const { t } = useTranslation(['button', 'common']);
    // const { locale, setLocale } = useStoreGlobal();
    return (
        <div className="p-2">
            <h1>{t('Welcome to React')}</h1>
            <h1>{t('create', { ns: 'button' })}</h1>
            <h1>{t('app.name', { ns: 'common' })}</h1>
            <h3>Welcome Home!</h3>
            <br />
            {/* <Button onClick={() => setLocale(locale === 'fa' ? 'en' : 'fa')}>Hello</Button> */}
        </div>
    );
}
