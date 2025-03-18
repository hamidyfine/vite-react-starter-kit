import '@testing-library/jest-dom';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { vi } from 'vitest';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
    value: vi.fn().mockImplementation((query) => ({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: false,
        media: query,
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
    })),
    writable: true,
});

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
    defaultNS: 'translations',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    lng: 'en',
    ns: ['translations'],
    resources: { en: { translations: {} } },
});

class ResizeObserver {
    disconnect = () => {};
    observe = () => {};
    unobserve = () => {};
}

window.ResizeObserver = ResizeObserver;
