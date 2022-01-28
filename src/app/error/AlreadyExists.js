class AlreadyExists extends Error {
  constructor() {
    super();
    this.statusCode = 400;

    this.description = 'Bad request';

    this.message = `Already existing information.`;
  }
}

module.exports = AlreadyExists;
