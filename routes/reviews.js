const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, ReviewController.create);
router.get("/byProduct/:id", ReviewController.getByProduct);
router.get("/byUser/:id", ReviewController.getByUser);
module.exports = router;
