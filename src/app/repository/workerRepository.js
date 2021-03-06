const schemaWorker = require('../schema/workerSchema');

class WorkerRepository {
  async create(payload) {
    return schemaWorker.create(payload);
  }

  async findAll(search) {
    const { page = 1, limit = 100, ...query } = search;
    return schemaWorker.paginate(
      { query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * limit
      }
    );
  }

  async updateById(id, payload) {
    return schemaWorker.findByIdAndUpdate(id, { ...payload }, { new: true });
  }

  async deleteById(id) {
    return schemaWorker.findByIdAndDelete(id);
  }

  async listById(id) {
    return schemaWorker.findOne({ id });
  }
}
module.exports = new WorkerRepository();
