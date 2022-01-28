const serializer = ({ _id, name, category, price, createdAt, updatedAt }) => ({
  _id,
  name,
  category,
  price,
  createdAt,
  updatedAt
});

const paginatedSerializer = ({ docs, totalDocs, limit, totalPages, page }) => ({
  products: docs.map(serializer),
  limit,
  total: totalDocs,
  offset: page,
  offsets: totalPages
});

module.exports = {
  serializer,
  paginatedSerializer
};
