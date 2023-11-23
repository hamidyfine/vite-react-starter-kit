export const project = {
    // Routes
    // Using routes in the app like this:
    // `{route.auth.prefix}/{route.auth.login}
    route: {
        root: {
            prefix: '/',
        },
        auth: {
            prefix: '/auth',
            login: 'login',
            logout: 'logout',
            register: 'register',
            forget: 'forget-password',
        },
        dashboard: {
            prefix: '/dashboard',
            home: '',
        },
    },

    // App
    app: {
        theme: 'dark',
    },

    // Auth
    auth: {
        authenticated_redirect_path: '/dashboard',
        unauthenticated_redirect_path: '/auth/login',
        has_remember_me_option: true,
        has_recover_password_option: true,
    },
} as const;
