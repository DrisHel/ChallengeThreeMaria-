const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { enumWorker1 } = require('../utils/enumWorker');

const Worker = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    required: true,
    unique: true
  },

  birthday: {
    type: Date,
    required: true
  },

  office: {
    type: String,
    enum: enumWorker1,
    required: true
  },

  situation: {
    type: String,
    required: true,
    default: 'active'
  },
  createdAt: {
    type: Date,

    required: true,

    default: Date.now()
  },
  updatedAt: {
    type: Date,

    required: true,

    default: Date.now()
  }
});

Worker.plugin(mongoosePaginate);
module.exports = mongoose.model('worker', Worker);
