import { create } from 'zustand';

import { locales } from '@/configs';

interface GlobalStore {
    locale: string;
    setLocale: (locale: string) => void;
}

export const useStoreGlobal = create<GlobalStore>((set) => ({
    locale: import.meta.env.VITE_DEFAULT_LOCALE as string || locales.default,
    setLocale: (locale) => set({ locale }),
}));
