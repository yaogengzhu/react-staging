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
        path: '/universal',
        component: Loadable({
            loader: () => import('@/views/Universal/Universal'),
            loading: Loading,
        })
    }
]

export default routes
