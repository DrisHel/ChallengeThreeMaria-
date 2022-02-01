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

  async listOne(id) {
    const result = await productRepository.listById(id);
    return result;
  }
}

module.exports = new ProductService();
