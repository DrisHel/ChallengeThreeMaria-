/* eslint-disable consistent-return */
const WorkerService = require('../service/workerService');

class WorkerController {
  async create(req, res) {
    try {
      const result = await WorkerService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getAll(req, res) {
    try {
      const result = await WorkerService.listAll(req.query);
      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }

  async update(req, res) {
    try {
      const result = await WorkerService.updateWorker(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await WorkerService.deleteWorker(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new WorkerController();
