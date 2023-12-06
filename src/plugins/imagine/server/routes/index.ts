export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/ask',
    handler: 'myController.ask',
    config: {
      policies: [],
    },
  },
];
