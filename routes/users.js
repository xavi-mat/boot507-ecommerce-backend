const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const multer = require("multer");
const upload = multer({ dest: "avatars/" });

router.post("/", UserController.create); // Register a user
router.put("/", authentication, upload.single('avatar'), UserController.updateUser);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get("/", authentication, UserController.getUserWithOrders);

// TODO: More endpoints
// router.get("/", UserController.getAll);
// router.delete("/delete/:id", UserController.delete);
// router.put("/id/:id", UserController.update);

module.exports = router;
