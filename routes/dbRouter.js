const express = require("express");
const router = express.Router();
const dbController = require("../controller/dbController");

router.get("/", dbController.getInfo);
router.post("/", dbController.createInfo);

module.exports = router;
