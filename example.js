const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("/db");
});

router.get("/getInfo", async (req, res) => {
  const allInfo = await prisma.users.findMany();
  console.log(allInfo);
  res.send(allInfo);
});

module.exports = router;
