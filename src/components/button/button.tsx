import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ children, ...props }: PropsWithChildren<any>) => {
    const { t } = useTranslation('button');

    return (
        <button
            {...props}
            type="button"
        >
            {t('create', { ns: 'button' })}
            {children}
        </button>
    );
};
