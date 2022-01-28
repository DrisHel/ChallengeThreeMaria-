const { Router } = require('express');
const routerWorker = require('./workerRoutes');

module.exports = (server) => {
  server.use((req, res, next) => {
    routerWorker(server, new Router());
    next();
  });
};
