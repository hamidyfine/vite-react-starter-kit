import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import * as Layout from '../layouts';
import { project } from './project.config';

const { route } = project;

export const routes: RouteObject[] = [
    {
        element: createElement(Layout.DefaultLayout),
        children: [
            {
                path: route.root.prefix,
                element: createElement(lazy(() => import(/*webpackChunkName: "home" */ '../views/home'))),
            },
            {
                path: route.auth.prefix,
                element: createElement(Layout.AuthLayout),
                children: [
                    {
                        path: route.auth.login,
                        element: createElement(lazy(() => import(/*webpackChunkName: "login" */ '../views/auth/login'))),
                    },
                    {
                        path: route.auth.register,
                        element: createElement(lazy(() => import(/*webpackChunkName: "register" */ '../views/auth/register'))),
                    },
                    {
                        path: route.auth.forget,
                        element: createElement(lazy(() => import(/*webpackChunkName: "forget-password" */ '../views/auth/forget-password'))),
                    },
                ],
            },
            {
                path: route.dashboard.prefix,
                element: createElement(Layout.DashboardLayout),
                children: [
                    {
                        path: route.dashboard.home,
                        element: createElement(lazy(() => import(/*webpackChunkName: "dashboard" */ '../views/dashboard/home'))),
                    },
                ],
            },
        ],
    },
];
