// import Loadable from 'react-loadable';

const routes = [
    {
        path: '/sandwiches',
        component: ''
    },
    {
        path: '/tacos',
        component: '',
        routes: [
            {
                path: '/tacos/bus',
                component: ''
            },
            {
                path: '/tacos/cart',
                component: ''
            }
        ]
    }
];

export default routes
