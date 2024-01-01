import { Model } from 'miragejs';

import { TName, TUser } from '../types';

const user = Model.extend<Partial<TUser>>({});

const name = Model.extend<Partial<TName>>({});

export const models = {
    user,
    name,
};
