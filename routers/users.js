const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

router.post("", jsonParser, userController.registerUsers);

router.put("/:id", jsonParser, userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.get("", userController.getAllUsers);

module.exports = router;