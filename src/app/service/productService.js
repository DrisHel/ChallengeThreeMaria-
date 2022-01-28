const productRepository = require('../repository/productRepository');

class ProductService {
  async create(payload) {
    const result = await productRepository.create(payload);
    return result;
  }

  async listAll(search) {
    const result = await productRepository.findAll(search);
    return result;
  }
}

module.exports = new ProductService();
