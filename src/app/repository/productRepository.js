const productSchema = require('../schema/productSchema');

class ProductRepository {
  async create(payload) {
    return productSchema.create(payload);
  }

  async findAll(search) {
    const { page = 1, limit = 100, ...query } = search;
    return productSchema.paginate(
      { query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * limit
      }
    );
  }
}
module.exports = new ProductRepository();
