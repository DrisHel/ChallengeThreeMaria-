const JoiDateExtension = require('@joi/date');
const Joi = require('joi').extend(JoiDateExtension);
const { enumWorker1 } = require('../../utils/enumWorker');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(10).max(40).trim().required(),
      cpf: Joi.string().length(11).trim().required(),
      birthday: Joi.date().format('DD/MM/YYYY').less(Date.now()).required(),
      office: Joi.string()
        .valid(...enumWorker1)
        .trim()
        .required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
