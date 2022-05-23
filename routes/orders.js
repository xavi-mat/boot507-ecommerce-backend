const express = require("express");
const OrderController = require("../controllers/OrderController");
const router = express.Router();

router.post('/', OrderController.create);
router.post('/addProduct', OrderController.addProduct);
router.get('/:id', OrderController.getAll);

module.exports = router;
