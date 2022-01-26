const WorkerController = require('../app/controller/workerController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', WorkerController.create);
  server.use(prefix, routes);
};
