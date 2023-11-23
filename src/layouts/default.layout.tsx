import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
    </Suspense>
);

export default DefaultLayout;
