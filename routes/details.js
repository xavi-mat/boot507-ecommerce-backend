const express = require("express");

const DetailController = require("../controllers/DetailController");

const router = express.Router();

router.post("/", DetailController.create);

router.get("/", DetailController.showAllcategoryProduct);

module.exports = router;
