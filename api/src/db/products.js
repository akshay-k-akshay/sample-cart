const { Products } = require("../models/products");

module.exports = {
  list: async (page, limit) => {
    const products = await Products.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Products.countDocuments();
    return {
      data: products,
      meta: {
        total,
        page,
        limit
      }
    };
  },

  create: async (data) => {
    const product = new Products(data);
    return await product.save();
  },

  findById: async (id) => {
    return await Products.findById(id);
  },

  update: async (id, data) => {
    return await Products.findByIdAndUpdate(id, data);
  },

  delete: async (id) => {
    return await Products.findByIdAndDelete(id);
  }
};
