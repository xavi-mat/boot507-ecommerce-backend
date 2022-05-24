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
router.get("/:id", ProductController.productById);
router.get("/name/:name", ProductController.productByName);
router.get("/price/:price", ProductController.productByPrice);
router.get("/listPrice/desc", ProductController.productListPrice);

module.exports = router;
