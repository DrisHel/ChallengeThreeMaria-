const WorkerRepository = require('../repository/workerRepository');

class WorkerService {
  async create(payload) {
    const result = await WorkerRepository.create(payload);
    return result;
  }

  async listAll(search) {
    return WorkerRepository.find(search);
  }

  async updateWorker(id, payload) {
    const result = await WorkerRepository.updateById(id, payload);
    return result;
  }

  async deleteWorker(id) {
    const result = await WorkerRepository.deleteById(id);
    return result;
  }
}

module.exports = new WorkerService();
