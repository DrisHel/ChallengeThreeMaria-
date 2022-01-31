const mongoose = require('mongoose');

require('../src/infra/database/db');

global.afterEach(async () => {
  awaitPromise.all(
    Object.keys(mongoose.connection.collections).map(async (collection) => {
      awaitmongoose.connection.collections[collection].deleteMany({});
    })
  );
});
