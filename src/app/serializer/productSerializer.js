const serializer = ({ _id, name, category, price, employee_id, createdAt, updatedAt }) => ({
  product_id: _id,
  name,
  category,
  price,
  createdAt,
  updatedAt,
  employee_id
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
