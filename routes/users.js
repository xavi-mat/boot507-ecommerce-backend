const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/", UserController.create);  // Register a user
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/", UserController.getUserWithOrders);

// TODO: More endpoints
// router.get("/", UserController.getAll);
// router.delete("/delete/:id", UserController.delete);
// router.put("/id/:id", UserController.update);

module.exports = router;
