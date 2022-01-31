const BadRequest = require('../error/BadRequest');
const WorkerRepository = require('../repository/workerRepository');
const validationCpf = require('../utils/validationCpf');

class WorkerService {
  async create(payload) {
    const isCpfValid = validationCpf(payload.cpf);

    if (isCpfValid) throw new BadRequest(isCpfValid);

    const result = await WorkerRepository.create(payload);
    return result;
  }

  async listAll(search) {
    const result = await WorkerRepository.findAll(search);
    return result;
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
