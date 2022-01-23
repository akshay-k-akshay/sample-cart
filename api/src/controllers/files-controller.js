const { StatusCodes } = require("http-status-codes");

const { config } = require("../config/app-config");

const endpoint = config.get("app.endpoint");

module.exports = {
  create: async (req, res, next) => {
    try {
      console.log(req.files);
      const data = req.files.map((file) => {
        return {
          filename: `${endpoint}/${file.filename}`,
          mimetype: file.mimetype
        };
      });
      res.status(StatusCodes.OK).json({
        message: "File uploaded successfully",
        data,
        meta: {}
      });
    } catch (error) {
      next(error);
    }
  }
};
