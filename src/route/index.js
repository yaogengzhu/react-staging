import Loading from '@/component/Loading/Loading'
import Loadable from 'react-loadable'
const routes = [
    {
        path: '/home',
        component: Loadable({
            loader: () => import('@/views/Home/Home'),
            loading: Loading,
        })
    },
    {
        path: '/coupon',
        component: Loadable({
            loader: () => import('@/views/Coupon/Coupon'),
            loading: Loading,
        })
    }
]

export default routes
