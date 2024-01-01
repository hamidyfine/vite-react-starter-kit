import { useMutation, useQuery } from '@tanstack/react-query';

import { TRequestConfig, TResponse, TUseFetchArgs, TUseMutateArgs } from '../types';
import { request } from '../utils';

const useFetch = (args: TUseFetchArgs) => {
    const _key = args.key || args.collection?.key;
    const _url = args.url || args.collection?.url;

    if (!_key) {
        throw new Error('key or collection is required');
    }

    const config: TRequestConfig = {
        collection: args.collection,
        method: args.method,
        url: _url,
        params: { ...args.params },
        data: { ...args.data_params },
        headers: args.headers || {},
    };

    const { data, isLoading: is_loading, refetch, error } = useQuery({
        queryKey: [_key, config],
        queryFn: async () => await request.call(config),
        enabled: !!args.enabled,
        select: (data) => {
            if (args.transformer) {
                return args.transformer(data);
            }
            return data;
        },
    });

    const response: TResponse = data as TResponse;

    return {
        error,
        is_loading: is_loading || false,
        refetch,
        response: response,
        data: response?.data,
    };
};

const useMutate = (args: TUseMutateArgs) => {
    const _key = args.key || args.collection?.key;
    const _url = args.url || args.collection?.url;

    const config: TRequestConfig = {
        collection: args.collection,
        method: args.method,
        url: _url,
        params: { ...args.params },
        data: { ...args.data_params },
        headers: args.headers || {},
    };

    const { mutate, isPending: is_loading, error, data } = useMutation({
        mutationKey: [_key],
        mutationFn: async () => await request.call(config),
        onSuccess: args.onSuccess,
    });

    return {
        mutate,
        is_loading: is_loading || false,
        error,
        data: data?.data,
        response: data,
        status: data?.status,
        status_text: data?.statusText,
    };
};

export {
    useFetch,
    useMutate,
};
