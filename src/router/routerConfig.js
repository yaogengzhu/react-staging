export default [
  {
    path: '/home',
    exact: true,
    text: '首页',
    page: () => {
      return import('../app/Home');
    },
  },
  {
    path: '/todo',
    exact: true,
    text: '列表',
    page: () => {
      return import('../app/Todo');
    },
  },
  {
    path: '/message',
    exact: true,
    text: '信息',
    page: () => {
      return import('../app/Message');
    },
  },
  {
    path: '/personCenter',
    exact: true,
    text: '个人中心',
    page: () => {
      return import('../app/PersonCenter');
    },
  },
];
