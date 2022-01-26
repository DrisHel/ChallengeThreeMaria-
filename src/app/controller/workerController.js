const WorkerService = require('../service/workerService');

class WorkerController {
  async create(req, res) {
    try {
      const result = await WorkerService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  }
}

module.exports = new WorkerController();
