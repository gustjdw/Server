const express = require("express");
const router = express.Router();
const dbController = require("../controller/dbController");

router.route("/").post(dbController.addInfo);

module.exports = router;
