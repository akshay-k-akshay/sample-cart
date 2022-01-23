const express = require("express");

const controller = require("../controllers/files-controller");
const { upload } = require("../middlewares/files");

const Files = new express.Router();

Files.post("/", upload, controller.create);

module.exports = { Files };
