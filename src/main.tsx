import '@fontsource-variable/sofia-sans';
import '@mantine/core/styles.css';
import './main.scss';

import { MantineColorScheme, MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { project, routes, theme } from './configs';
import { IntlProvider } from './providers';
import { store } from './stores';

const router = createBrowserRouter(routes);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <StoreProvider store={store}>
            <MantineProvider
                defaultColorScheme={project.app.theme as MantineColorScheme}
                theme={theme}
            >
                <IntlProvider>
                    <RouterProvider router={router} />
                </IntlProvider>
            </MantineProvider>
        </StoreProvider>
    </StrictMode>,
);
