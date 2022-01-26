const { Router } = require('express');
const routerWorker = require('./workerRoutes');

module.exports = (server) => {
  server.use((_req, _res, next) => {
    routerWorker(server, new Router());
    next();
  });
};
