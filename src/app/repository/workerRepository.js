const schemaWorker = require('../schema/workerSchema');

class WorkerRepository {
  async create(payload) {
    return schemaWorker.create(payload);
  }

  async find(search) {
    return schemaWorker.find(search);
  }

  async updateById(id, payload) {
    return schemaWorker.findByIdAndUpdate(id, { ...payload });
  }

  async deleteById(id) {
    return schemaWorker.findByIdAndDelete(id);
  }
}
module.exports = new WorkerRepository();
