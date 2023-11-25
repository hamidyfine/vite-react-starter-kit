// Routes
// Using routes in the app like this:
// `{route.auth.prefix}/{route.auth.login}
const routes = {
    root: {
        prefix: '/',
    },
    auth: {
        prefix: '/auth',
        login: 'login',
        logout: 'logout',
        register: 'register',
        forget: 'forget-password',
        access_denied: 'access-denied',
    },
    dashboard: {
        prefix: '/dashboard',
        home: '',
    },
};

const collections = {
    // Auth
    refresh_token: 'user/refresh',
};

export const project = {
    routes,
    collections,

    app: {
        name: 'My Movies',
        version: '1.0.0',
        description: 'List my favorite movies',
        theme: 'dark',
    },

    api: {
        base_url: 'http://localhost:8000',
        use_token: true,
        use_role: true,
        status: {
            access_token_expire: 408,
            refresh_token_expire: 407,
            access_dined: 403,
        },
    },

    // Auth
    auth: {
        is_auth_implemented: false,
        authenticated_redirect_path: `${routes.dashboard.prefix}/${routes.dashboard.home}`,
        unauthenticated_redirect_path: `${routes.auth.prefix}/${routes.auth.login}`,
        refresh_token_ignored_path: [
            `${routes.auth.prefix}/${routes.auth.login}`,
            `${routes.auth.prefix}/${routes.auth.register}`,
        ],
        has_remember_me_option: true,
        has_recover_password_option: true,
    },
};
