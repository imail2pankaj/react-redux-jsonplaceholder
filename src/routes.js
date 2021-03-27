import { lazy } from 'react';

const routes = [
    {
        path: '/users',
        component: lazy(() => import('./pages/UserPage/UserPageComponent'))
    },
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./pages/HomePage/HomePageComponent'))
    }
]

export default routes;