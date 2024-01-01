type TUser = {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    streetAddress: string;
    zipCode: string;
    phone: string;
    username: string;
    password: string;
    email: string;
    avatar: string;
};

type TName = {
    id: string;
    name: string;
}

export type {
    TName,
    TUser,
};
