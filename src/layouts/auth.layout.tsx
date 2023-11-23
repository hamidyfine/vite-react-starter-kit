import { Center, Container, Flex } from '@mantine/core';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { project } from '../configs';
import { useAuthenticate } from '../hooks';

const AuthLayout = () => {
    const { is_authenticated } = useAuthenticate();
    const location = useLocation();

    if (is_authenticated) {
        return (
            <Navigate
                replace
                state={{ from: location}}
                to={project.auth.authenticated_redirect_path}
            />
        );
    }

    return (
        <Flex
            align="center"
            className="w-full min-h-screen"
            justify="center"
        >
            <Container fluid>
                <Center>
                    <Container className="w-[480px]">
                        <Outlet />
                    </Container>
                </Center>
            </Container>
        </Flex>
    );
};

export default AuthLayout;
