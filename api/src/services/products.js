const products = require("../db/products");

module.exports = {
  list: async (page, limit) => {
    return await products.list(page, limit);
  },

  create: async (data) => {
    const tax = (data.price / 100) * 10;
    data.price = Math.round(data.price + tax);
    return await products.create(data);
  }
};
