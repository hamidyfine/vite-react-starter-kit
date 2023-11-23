import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { project } from '../configs';
import { useAuthenticate } from '../hooks';

const DashboardLayout = () => {
    const { is_authenticated } = useAuthenticate();
    const location = useLocation();

    if (!is_authenticated) {
        return (
            <Navigate
                replace
                state={{ from: location}}
                to={project.auth.unauthenticated_redirect_path}
            />
        );
    }

    return (
        <Outlet />
    );
};

export default DashboardLayout;
