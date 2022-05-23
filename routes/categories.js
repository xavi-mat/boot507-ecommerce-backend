const express = require("express");

const router = express.Router();

const CategoryController = require("../controllers/CategoryController");

router.post("/", CategoryController.create);
router.get("/", CategoryController.showAllcategoryProduct);
router.get("/categorybyid/:id", CategoryController.categoryById);
router.get("/categorybyname/:name", CategoryController.categorByName);
router.put("/update/:id", CategoryController.updateCategory);
router.delete("/delete/:id", CategoryController.deleteCategory);

module.exports = router;
