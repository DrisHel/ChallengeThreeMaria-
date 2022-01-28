const { Router } = require('express');
const routerWorker = require('./workerRoutes');
const routerproduct = require('./productRoutes');

module.exports = (server) => {
  server.use((req, res, next) => {
    routerWorker(server, new Router());
    routerproduct(server, new Router());
    next();
  });
};
