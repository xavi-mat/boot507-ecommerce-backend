const express = require("express");
const OrderController = require("../controllers/OrderController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post('/', authentication, OrderController.create);
router.post('/product', authentication, OrderController.addProduct);
router.put('/product', authentication, OrderController.updateProduct);
router.get('/', authentication, OrderController.getAll);
router.get('/:id', authentication, OrderController.getDetails);
// TODO:
// delete product in order
// delete order


module.exports = router;
