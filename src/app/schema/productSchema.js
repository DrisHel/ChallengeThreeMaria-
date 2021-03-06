const mongoosePaginate = require('mongoose-paginate-v2');
const mongoose = require('mongoose');

const Product = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worker',
    required: true
  }
});

Product.plugin(mongoosePaginate);
module.exports = mongoose.model('product ', Product);
