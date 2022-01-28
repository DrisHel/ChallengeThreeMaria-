class NotFound extends Error {
  constructor(id) {
    super();

    this.statusCode = 404;

    this.description = 'Not found';

    this.message = `The ID: ${id} was not found`;
  }
}

module.exports = NotFound;
