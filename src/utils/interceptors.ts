import type { AxiosError } from 'axios';

import { project } from '../configs';
import { client } from './request';

const status = project.api.status;

const role = async (error: AxiosError) => {
    const status_code = error?.response?.status;

    if (status_code === status.access_dined) {
        try {
            localStorage.setItem('refer_link', error.config?.url || '');
            localStorage.setItem('is_access_denied', 'true');
            window.location.href = project.routes.auth.access_denied;
        } catch (error) {
            console.error(error);
        }
    }
};

const token = async (error: AxiosError) => {
    const user = localStorage.getItem('user');
    const ignore_refresh_token_paths = project.auth.refresh_token_ignored_path;
    const status_code = error?.response?.status;

    if (user && error.config?.url && !ignore_refresh_token_paths.includes(error.config?.url) && status_code === status.access_token_expire) {
        try {
            const refresh = await client({
                method: 'POST',
                url: project.collections.refresh_token,
                data: { user },
            });

            if (refresh.data.error && refresh.data.status === status.refresh_token_expire) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = project.routes.auth.login;
            }

            if (!refresh.data.error && refresh) {
                localStorage.setItem('token', refresh.data.access_token);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

export {
    role,
    token,
};
