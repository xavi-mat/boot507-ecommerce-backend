const express = require("express");
const ReviewController = require("../controllers/ReviewController");
const router = express.Router();
const { authentication, isManager } = require("../middleware/authentication");

router.post("/", authentication, ReviewController.create);
router.get("/", ReviewController.getAllReviews);
router.get("/byProduct/:id", ReviewController.getByProduct);
router.get("/byUser/:id", ReviewController.getByUser);
router.put("/:id", authentication, isManager, ReviewController.updateReview);
router.delete("/:id", authentication, ReviewController.deleteReview);

module.exports = router;
