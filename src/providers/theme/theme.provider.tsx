import '@mantine/core/styles.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import type { ComponentProps, PropsWithChildren } from 'react';

import { theme } from '@/configs';

export const ThemeProvider = ({ children, ...props }: PropsWithChildren<ComponentProps<typeof MantineProvider>>) => {
    return (
        <DirectionProvider>
            <MantineProvider
                {...props}
                theme={theme}
            >
                {children}
            </MantineProvider>
        </DirectionProvider>
    );
};
