const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById } = require("../controllers/userController");
const { updateUser } = require("../controllers/userController");



router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

module.exports = router;