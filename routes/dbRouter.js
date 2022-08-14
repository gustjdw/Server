const express = require("express");
const router = express.Router();
const dbController = require("../controller/dbController");

router.get("/", dbController.readInfo);
router.post("/", dbController.createInfo);

module.exports = router;
