const { StatusCodes } = require("http-status-codes");
const productsService = require("../services/products");

module.exports = {
  list: async (req, res, next) => {
    try {
      const { limit, page } = req.query;
      const result = await productsService.list(
        parseInt(page) || 1,
        parseInt(limit) || 10
      );
      return res.status(StatusCodes.OK).json({
        message: "Products listed successfully",
        ...result
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const result = await productsService.create(req.body);
      return res.status(StatusCodes.OK).json({
        message: "Product created successfully",
        data: result,
        meta: {}
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await productsService.update(req.params.id, req.body);
      return res.status(StatusCodes.OK).json({
        message: "Product updated successfully",
        data: result,
        meta: {}
      });
    } catch (error) {
      next(error);
    }
  }
};
