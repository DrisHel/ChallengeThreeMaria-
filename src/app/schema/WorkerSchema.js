const { mongoose } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { randonUUID }= require('crypto');



const Worker = mongoose.Schema(
{

    id:{
        type: String,
        required:true,
        default:randonUUID
    },

    name:{
        type: String,
        required:true
    },

    cpf:{
        type: String,
        required:true,
        unique:true
    },

    birthday:{
        type: Date,
        required:true
    },

    office:{
        type: String,
        enum: ['manager','seller','cashier'],  //gerente, vendedor, caixa
        required:true
    },

    situation: {
        type: String,
        required: true,
        default: 'active'
      }
},
      {
          timestemps:true
      } 

);

Worker.plugin(mongoosePaginate);
module.exports= mongoose.model('Worker', Worker);
