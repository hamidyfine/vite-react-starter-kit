import type {  RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { ComponentProps } from 'react';

import { IntlProvider, QueryProvider, ThemeProvider } from '../../providers';

type ThemeConfig = Omit<ComponentProps<typeof ThemeProvider>, 'children'|'theme'>;

export const renderWrapper = (ui: React.ReactNode, theme?: ThemeConfig, options?: RenderOptions) => {
    return render(
        <IntlProvider>
            <ThemeProvider {...theme}>
                <QueryProvider>
                    {ui}
                </QueryProvider>
            </ThemeProvider>
        </IntlProvider>,
        options,
    );
};
