const formatDate = require('../utils/dateconversion');
const Format = require('../utils/formatCpf');

const serializer = ({ _id, name, cpf, birthday, office, situation, createdAt, updatedAt }) => ({
  _id,
  name,
  cpf: Format.format(cpf),
  birthday: formatDate.formatDateToRequest(birthday),
  office,
  situation,
  createdAt,
  updatedAt
});

const paginatedSerializer = ({ docs, totalDocs, limit, totalPages, page }) => ({
  workers: docs.map(serializer),
  limit,
  total: totalDocs,
  offset: page,
  offsets: totalPages
});

module.exports = {
  serializer,
  paginatedSerializer
};
