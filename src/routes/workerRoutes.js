const WorkerController = require('../app/controller/workerController');
const createdWorkerValidation = require('../app/validation/workerValidation/createdWorkerValidation');
const findAllvalidation = require('../app/validation/workerValidation/findAllvalidation');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', createdWorkerValidation, WorkerController.create);
  routes.get('/', findAllvalidation, WorkerController.getAll);
  routes.get('/:id', WorkerController.listOne);
  routes.put('/:id', WorkerController.update);
  routes.delete('/:id', WorkerController.delete);
  server.use(prefix, routes);
};
