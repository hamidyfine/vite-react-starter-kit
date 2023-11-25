import axios from 'axios';

import { project } from '../configs';
import { TRequestConfig, TResponse } from '../types';
import { role, token } from '.';

const base_url = project.api.base_url;

const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    config => {
        if (project.api.use_token) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response: TResponse) => {
        return response;
    },
    async (error) => {
        if (project.api.use_token) token(error);
        if (project.api.use_role) role(error);
        return Promise.reject(error);
    },
);

const client = axiosInstance;

const apiUrl = (url: string) => `${base_url}/${url}`;

const call = async ({
    collection,
    method,
    url,
    data,
    params,
    headers,
    ...props
}: TRequestConfig): Promise<TResponse> => {
    const _method = collection?.method || method || 'GET';
    const _url = collection?.url || url;

    if (!_url) {
        throw new Error('url is required');
    }

    return await axiosInstance({
        method: _method,
        url: _url,
        data,
        params,
        headers,
        ...props,
    });
};

export {
    apiUrl,
    base_url,
    call,
    client,
};
