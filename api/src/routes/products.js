const express = require("express");

const controller = require("../controllers/products-controller");

const Products = new express.Router();

// Products.post("/", controller.ping);
Products.get("/", controller.list);

module.exports = { Products };
