export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.list',
    config: {
      policies: [],
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: 'myController.create',
    config: {
      policies: [],
    },
  },
];
