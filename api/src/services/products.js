const products = require("../db/products");
const { NotFoundError } = require("../errors");

function calculatePrice(price) {
  const percentage = 10;
  const tax = (price * percentage) / 100;
  return Math.round(price + tax);
}

module.exports = {
  list: async (page, limit) => {
    return await products.list(page, limit);
  },

  create: async (data) => {
    data.price = calculatePrice(data.price);
    return await products.create(data);
  },

  update: async (id, data) => {
    const item = await products.findById(id);
    if (!item) {
      throw new NotFoundError("Product not found");
    }
    data.price =
      data.price === item.price ? item.price : calculatePrice(data.price);
    return await products.update(id, data);
  },

  delete: async (id) => {
    const item = await products.findById(id);
    if (!item) {
      throw new NotFoundError("Product not found");
    }
    return await products.delete(id);
  },
  find: async (id) => {
    const item = await products.findById(id);
    if (!item) {
      throw new NotFoundError("Product not found");
    }
    return item;
  }

};
