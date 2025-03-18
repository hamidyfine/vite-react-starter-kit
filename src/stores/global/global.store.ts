import { create } from 'zustand';

interface GlobalStore {
    locale: string;
    setLocale: (locale: string) => void;
}

export const useStoreGlobal = create<GlobalStore>((set) => ({
    locale: import.meta.env.VITE_DEFAULT_LOCALE as string,
    setLocale: (locale) => set({ locale }),
}));
