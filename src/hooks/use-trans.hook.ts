import { useTranslation } from 'react-i18next';

import { trans } from '@/utils';

export const useTypedTrans = (ns: string[]) => {
    const { t } = useTranslation(['vocab', ...ns]);

    const tt = (key: string, ns: string, vocab_type: string) => {
        return t(key, { ns, type: trans(vocab_type, { ns: 'vocab' }) });
    };
    return {
        tt,
    };
};

export const useTrans = useTranslation;
