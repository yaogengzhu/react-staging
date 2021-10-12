export default [
  {
    path: '/home',
    exact: true,
    text: '首页',
    page: () => {
      return import(/* webpackChunkName: "Home" */ '../app/Home');
    },
  },
  {
    path: '/todo',
    exact: true,
    text: '列表',
    page: () => {
      return import(/* webpackChunkName: "Todo" */  '../app/Todo');
    },
  },
  {
    path: '/message',
    exact: true,
    text: '信息',
    page: () => {
      return import(/* webpackChunkName: "Message" */ '../app/Message');
    },
  },
  {
    path: '/personCenter',
    exact: true,
    text: '个人中心',
    page: () => {
      return import(/* webpackChunkName: "PersonCenter" */ '../app/PersonCenter');
    },
  },
];
