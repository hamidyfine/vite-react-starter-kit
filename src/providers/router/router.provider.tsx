import { createRouter, RouterProvider as TanStackRouter } from '@tanstack/react-router';

import { routeTree } from '../../router/route-tree.gen';

const router = createRouter({
    defaultPreload: 'intent',
    routeTree,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export const RouterProvider = () => {
    return (<TanStackRouter router={router} />);
};
