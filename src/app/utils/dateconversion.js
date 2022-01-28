const moment = require('moment');

class FormatDate {
  formatDateToRequest(date) {
    return moment(date, 'YYYY-MM-DD').utc().format('DD/MM/YYYY');
  }
}

module.exports = new FormatDate();
