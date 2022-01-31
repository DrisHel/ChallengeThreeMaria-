const productController = require('../app/controller/productController');
const createdProductValidation = require('../app/validation/productValidation/createdProductValidation');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/:id', createdProductValidation, productController.create);
  routes.get('/', productController.getAll);
  server.use(prefix, routes);
};
