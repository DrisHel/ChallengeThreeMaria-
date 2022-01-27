const WorkerRepository = require('../repository/workerRepository');

class WorkerService {
  async create(payload) {
    const result = await WorkerRepository.create(payload);
    return result;
  }
}

module.exports = new WorkerService();
