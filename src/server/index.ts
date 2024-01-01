import { createServer } from 'miragejs';

import { project } from '../configs';
import { names } from './controller.server';
import { factories } from './factory.server';
import { models } from './model.server';

export const makeServer = ({ environment = 'test' } = {}) => createServer({
    environment,

    factories,

    models,

    seeds: (server) => {
        server.createList('user', 20);
    },

    routes() {
        this.namespace = project.api.mock.namespace;

        this.get('/users');
        this.get('/names', names);
    },
});
