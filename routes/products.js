const express = require("express");

const router = express.Router();

const ProductController = require("../controllers/ProductController");

//Endpoint para crear un producto
router.post("/", ProductController.create);

// Endpoint para actualizar un producto
router.put("/:id", ProductController.updateProduct);

// Endpoint para eliminar un producto
router.delete("/:id", ProductController.deleteProdruct);

// El endpoint de traer productos debe mostrarse junto a la categoría o categorías que pertenece
router.get("/searchcat/:id", ProductController.showProductsCategory);

// Endpoint que traiga un producto por su id
router.get("/:id", ProductController.productById);

// Filtro para buscar producto por nombre
router.get("/name/:name", ProductController.productByName);

// Filtro para buscar producto por precio
router.get("/price/:price", ProductController.productByPrice);

// Filtro que ordene los productos de mayor a menor precio
router.get("/listPrice", ProductController.productListPrice);
// Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
// Solo podrás crear, actualizar y eliminar productos si estás autenticado.

module.exports = router;
