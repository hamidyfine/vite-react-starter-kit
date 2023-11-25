import type { TMethod } from '.';

type TCollection = {
    key: string;
    url: string;
    method: TMethod;
}

type TCollections = {
    [key: string]: TCollection;
}

export type {
    TCollection,
    TCollections,
};
