class BadRequest extends Error {
  constructor(error) {
    super();
    this.statusCode = 400;

    this.description = error;

    this.message = 'Bad Request';
  }
}

module.exports = BadRequest;
