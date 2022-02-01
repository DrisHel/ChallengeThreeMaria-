/* eslint-disable consistent-return */
const { serializer, paginatedSerializer } = require('../serializer/workerSelializer');
const WorkerService = require('../service/workerService');

class WorkerController {
  async create(req, res) {
    try {
      const result = await WorkerService.create(req.body);
      return res.status(201).json(serializer(result));
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async getAll(req, res) {
    try {
      const result = await WorkerService.listAll(req.query);
      return res.status(200).json(paginatedSerializer(result));
    } catch (error) {
      res.status(400).json({
        message: error.message,

        details: {
          description: error.description
        }
      });
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
      await WorkerService.deleteWorker(req.paramns.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(404).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async listOne(req, res) {
    try {
      const aqui = await WorkerService.listOne(req.id);
      return res.status(201).json(aqui);
    } catch (error) {
      res.status(400).json({
        message: 'ID NotFound'
      });
    }
  }
}

module.exports = new WorkerController();
