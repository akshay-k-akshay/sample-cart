const express = require("express");

const controller = require("../controllers/products-controller");

const Products = new express.Router();

Products.post("/", controller.create);
Products.get("/", controller.list);
Products.put("/:id", controller.update);

module.exports = { Products };
