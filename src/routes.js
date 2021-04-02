import { lazy } from 'react';

const routes = [
    {
        exact: true,
        path: '/users',
        component: lazy(() => import('./pages/UserPage/UserPageComponent'))
    },
    {
        exact: true,
        path: '/users/:id',
        component: lazy(() => import('./pages/UserPage/UserDetailsPageComponent'))
    },
    {
        exact: true,
        path: '/posts',
        component: lazy(() => import('./pages/PostPage/PostPageComponent'))
    },
    {
        exact: true,
        path: '/posts/:id',
        component: lazy(() => import('./pages/PostPage/PostDetailsPageComponent'))
    },
    {
        exact: true,
        path: '/posts/:id/edit',
        component: lazy(() => import('./pages/PostPage/PostEditPageComponent'))
    },
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./pages/HomePage/HomePageComponent'))
    },
]

export default routes;