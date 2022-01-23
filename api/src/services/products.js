const products = require("../db/products");

module.exports = {
  list: async (page, limit) => {
    return await products.list(page, limit);
  }
};
