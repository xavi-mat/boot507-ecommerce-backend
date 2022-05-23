const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const { authentication } = require("../middleware/authentication");

router.post("/", UserController.create); // Register a user
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get("/", authentication, UserController.getUserWithOrders);

// TODO: More endpoints
// router.get("/", UserController.getAll);
// router.delete("/delete/:id", UserController.delete);
// router.put("/id/:id", UserController.update);

module.exports = router;
