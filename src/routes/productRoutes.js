const productController = require('../app/controller/productController');
const createdProductValidation = require('../app/validation/productValidation/createdProductValidation');
const findAllProductValidation = require('../app/validation/productValidation/findAllProductValidation');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/', createdProductValidation, productController.create);
  routes.get('/', findAllProductValidation, productController.getAll);
  server.use(prefix, routes);
};
