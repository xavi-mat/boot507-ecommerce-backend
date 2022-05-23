const express = require("express");
const ReviewController = require("../controllers/UserController");
const router = express.Router();
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, ReviewController.create); // create a review

module.exports = router;
