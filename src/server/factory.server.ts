import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

import { TUser } from '../types';

const user = Factory.extend<Partial<TUser>>({
    get firstName() {
        return faker.person.firstName();
    },
    get lastName() {
        return faker.person.lastName();
    },
    get name() {
        return faker.person.fullName();
    },
    get streetAddress() {
        return faker.location.streetAddress();
    },
    get zipCode() {
        return faker.location.zipCode();
    },
    get phone() {
        return faker.phone.number();
    },
    get username() {
        return faker.internet.userName();
    },
    get password() {
        return faker.internet.password();
    },
    get email() {
        return faker.internet.email();
    },
    get avatar() {
        return faker.internet.avatar();
    },
});

export const factories = {
    user,
};
