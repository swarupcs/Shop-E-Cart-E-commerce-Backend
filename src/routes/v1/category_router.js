const express = require("express");

const {
  createCategory,
  getAllCategories,
  getCategory,
} = require("../../controllers/category_controller");

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory); // mapping a route to a controller


categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);

module.exports = categoryRouter;
