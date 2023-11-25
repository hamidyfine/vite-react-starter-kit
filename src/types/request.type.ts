import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import type { TCollection } from '.';

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type TRequestConfig = AxiosRequestConfig & {
    collection?: {
        method: AxiosRequestConfig['method'];
        url: AxiosRequestConfig['url'];
    };
}

type TResponse = AxiosResponse;

type TUseFetchArgs = {
    collection?: TCollection;
    method?: TRequestConfig['method'];
    params?: TRequestConfig['params'];
    data_params?: TRequestConfig['data'];
    enabled?: boolean;
    headers?: TRequestConfig['headers'];
    key?: string[];
    transformer?: (data: unknown) => unknown;
    url?: TRequestConfig['url'];
};

type TUseMutateArgs = {
    collection?: TCollection;
    method?: TRequestConfig['method'];
    params?: TRequestConfig['params'];
    data_params?: TRequestConfig['data'];
    headers?: TRequestConfig['headers'];
    key?: string[];
    url?: TRequestConfig['url'];
    onSuccess?: (data: unknown) => void;
}

export type {
    TMethod,
    TRequestConfig,
    TResponse,
    TUseFetchArgs,
    TUseMutateArgs,
};
