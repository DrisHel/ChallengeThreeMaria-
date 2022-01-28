const productController = require('../app/controller/productController');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/', productController.create);
  routes.get('/', productController.getAll);
  server.use(prefix, routes);
};
