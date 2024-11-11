const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

router.post("/register", jsonParser, userController.registerUsers);

router.put("/update/:id", jsonParser, userController.updateUser);

router.delete("/delete/:id", userController.deleteUser);

router.get("/users", userController.getAllUsers);

module.exports = router;