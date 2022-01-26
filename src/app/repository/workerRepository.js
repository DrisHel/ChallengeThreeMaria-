const schemaWorker = require('../schema/workerSchema');

class WorkerRepository {
  async create(payload) {
    return schemaWorker.create(payload);
  }
}
module.exports = new WorkerRepository();
