import type { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ children, ...props }: PropsWithChildren<any>) => {
    return (
        <button
            {...props}
            type="button"
        >
            {children}
        </button>
    );
};
