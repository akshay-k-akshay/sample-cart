const { StatusCodes } = require("http-status-codes");
const products = require("../services/products");

module.exports = {
  list: async (req, res, next) => {
    try {
      const { limit, page } = req.query;
      const result = await products.list(
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
  }
};
