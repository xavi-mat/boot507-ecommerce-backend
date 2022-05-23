const express = require("express");

const router = express.Router();

const CategoryController = require("../controllers/CategoryController");

router.post("/", CategoryController.create);

// El endpoint para ver todas las categorías junto a los productos que tienen
router.get("/", CategoryController.showAllcategoryProduct);

// Crea un endpoint que devuelva una categoría por id
router.get("/categorybyid/:id", CategoryController.categoryById);

// Filtro para buscar categoría por nombre
router.get("/categorybyname/:name", CategoryController.categorByName);

router.put("/update/:id", CategoryController.updateCategory);

router.delete("/delete/:id", CategoryController.deleteCategory);

module.exports = router;
