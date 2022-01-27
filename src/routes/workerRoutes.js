const WorkerController = require('../app/controller/workerController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', WorkerController.create);
  routes.get('/', WorkerController.getAll);
  routes.put('/:id', WorkerController.update);
  routes.delete('/:id', WorkerController.delete);
  server.use(prefix, routes);
};
