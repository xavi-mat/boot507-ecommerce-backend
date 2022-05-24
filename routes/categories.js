const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const { authentication, isManager } = require("../middleware/authentication");
const router = express.Router();

router.post("/", authentication, isManager, CategoryController.create);
router.get("/", CategoryController.showAllcategoryProduct);
router.get("/categorybyid/:id", CategoryController.categoryById);
router.get("/categorybyname/:name", CategoryController.categorByName);
router.put("/update/:id", authentication, isManager, CategoryController.updateCategory);
router.delete("/delete/:id", authentication, isManager, CategoryController.deleteCategory);

module.exports = router;
