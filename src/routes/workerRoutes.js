const WorkerController = require('../app/controller/workerController');
const createdWorkerValidation = require('../app/validation/workerValidation/createdWorkerValidation');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', createdWorkerValidation, WorkerController.create);
  routes.get('/', WorkerController.getAll);
  routes.get('/:id', WorkerController.listOne);
  routes.put('/:id', WorkerController.update);
  routes.delete('/:id', WorkerController.delete);
  server.use(prefix, routes);
};
