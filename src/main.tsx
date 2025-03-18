import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { IntlProvider, QueryProvider, RouterProvider, ThemeProvider } from './providers';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <IntlProvider>
                <ThemeProvider>
                    <QueryProvider>
                        <RouterProvider />
                    </QueryProvider>
                </ThemeProvider>
            </IntlProvider>
        </StrictMode>,
    );
}
