const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authentication, isManager } = require('../middleware/authentication');
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", authentication, isManager, upload.single("imagen"), ProductController.create);
router.put("/:id", authentication, isManager, ProductController.updateProduct);
router.delete("/:id", authentication, isManager, ProductController.deleteProduct);
router.get("/list", ProductController.showProductsCategory);

// Endpoint que traiga un producto por su id
router.get("/:id", ProductController.productById);

// Filtro para buscar producto por nombre
router.get("/name/:name", ProductController.productByName);

// Filtro para buscar producto por precio
router.get("/price/:price", ProductController.productByPrice);

// Filtro que ordene los productos de mayor a menor precio
router.get("/listPrice/desc", ProductController.productListPrice);
// Implementa validación a la hora de crear un producto para que se rellene todos los campos y si no se hace que devuelva un mensaje
// Solo podrás crear, actualizar y eliminar productos si estás autenticado.

module.exports = router;
