class NotFound extends Error {
  constructor(error) {
    super();

    this.statusCode = 404;

    this.description = error;

    this.message = 'Not Found';
  }
}

module.exports = NotFound;
