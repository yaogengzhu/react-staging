const menuList = [
    {
        path: '/home',
        name: '首页',
    },
    {
        path: '/order',
        name: '订单',
    },
    {
        path: '/wuliu',
        name: '物流',
    },
    {
        path: '/data',
        name: '数据管理',
        children: [
            {
                path: '/data/chart',
                name: '数据图表',
                children: [
                    {
                        path: '/data/chart/1',
                        name: '数据图表1',
                    }
                ]
            }
        ]
    }
]

export default menuList
