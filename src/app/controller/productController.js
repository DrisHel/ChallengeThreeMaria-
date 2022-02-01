/* eslint-disable consistent-return */
const { serializer, paginatedSerializer } = require('../serializer/productSerializer');
const productService = require('../service/productService');

class productController {
  async create(req, res) {
    try {
      const result = await productService.create(req.body);
      return res.status(201).json(serializer(result));
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getAll(req, res) {
    try {
      const result = await productService.listAll(req.query);
      return res.status(200).json(paginatedSerializer(result));
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }

  async listAll(req, res) {
    try {
      const listProduct = await productService.listAll(req.id);
      return res.status(201).json(listProduct);
    } catch (error) {
      res.status(400).json({
        message: 'ID NotFound'
      });
    }
  }
}

// eslint-disable-next-line new-cap
module.exports = new productController();
