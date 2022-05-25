const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();
const { authentication, isManager } = require("../middleware/authentication");

router.post("/", authentication, ReviewController.create);
// router.get("/", ReviewController.getAllReviews);
router.get("/product/:id", ReviewController.getByProduct);
router.get("/user/:id", ReviewController.getByUser);
// router.put("/:id", authentication, isManager, ReviewController.updateReview);
// router.delete("/:id", authentication, ReviewController.deleteReview);

module.exports = router;
