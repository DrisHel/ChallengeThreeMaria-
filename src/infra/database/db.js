const mongoose = require('mongoose');

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      'mongodb+srv://doris:1234@cluster0.kkipq.mongodb.net/myFirstCompany?retryWrites=true&w=majority'
    );
  }
}

module.exports = new Database().connect();
